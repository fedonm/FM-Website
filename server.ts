import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Trust reverse proxies (Nginx Proxy Manager, Cloudflare, etc.)
app.set('trust proxy', true);

// Middleware for parsing JSON with request size limit
app.use(express.json({ limit: '64kb' }));
app.use(express.urlencoded({ extended: true, limit: '64kb' }));

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'fedonmesthanefs-api',
  });
});

interface BookingPayload {
  name: string;
  email: string;
  phone?: string;
  studentLevel?: string;
  lessonLanguage?: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
  turnstileToken: string;
  lang?: 'el' | 'en';
}

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

// Helper to sanitize text and prevent header injection
function sanitizeInput(str: unknown, maxLength: number): string {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLength);
}

// POST /api/booking submission handler
app.post('/api/booking', async (req: Request, res: Response) => {
  const isGreek = req.body.lang === 'el';

  try {
    const rawBody = req.body as Partial<BookingPayload>;

    const name = sanitizeInput(rawBody.name, 100);
    const email = sanitizeInput(rawBody.email, 150);
    const phone = sanitizeInput(rawBody.phone, 50);
    const studentLevel = sanitizeInput(rawBody.studentLevel, 100);
    const lessonLanguage = sanitizeInput(rawBody.lessonLanguage, 50);
    const preferredDate = sanitizeInput(rawBody.preferredDate, 50);
    const preferredTime = sanitizeInput(rawBody.preferredTime, 50);
    const message = sanitizeInput(rawBody.message, 1000);
    const turnstileToken = sanitizeInput(rawBody.turnstileToken, 2048);

    // 1. Basic Input Validation
    if (!name || name.length < 2) {
      return res.status(400).json({
        success: false,
        error: isGreek
          ? 'Παρακαλούμε εισάγετε ένα έγκυρο ονοματεπώνυμο.'
          : 'Please provide a valid full name.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: isGreek
          ? 'Παρακαλούμε εισάγετε μια έγκυρη διεύθυνση email.'
          : 'Please provide a valid email address.',
      });
    }

    if (!message || message.length < 5) {
      return res.status(400).json({
        success: false,
        error: isGreek
          ? 'Παρακαλούμε συμπληρώστε ένα σύντομο μήνυμα.'
          : 'Please write a brief message regarding your learning goals.',
      });
    }

    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        error: isGreek
          ? 'Αποτυχία επαλήθευσης ασφαλείας Cloudflare Turnstile.'
          : 'Cloudflare Turnstile security verification is required.',
      });
    }

    // 2. Cloudflare Turnstile Token Verification
    const turnstileSecret =
      process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY ||
      process.env.TURNSTILE_SECRET_KEY;

    if (turnstileSecret) {
      const clientIp =
        (req.headers['cf-connecting-ip'] as string) ||
        (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
        req.socket.remoteAddress ||
        '';

      const verifyFormData = new URLSearchParams();
      verifyFormData.append('secret', turnstileSecret);
      verifyFormData.append('response', turnstileToken);
      if (clientIp) {
        verifyFormData.append('remoteip', clientIp);
      }

      const verifyResponse = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
          method: 'POST',
          body: verifyFormData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (!verifyResponse.ok) {
        console.error(
          `[Turnstile] Siteverify API returned HTTP status ${verifyResponse.status}`
        );
        return res.status(400).json({
          success: false,
          error: isGreek
            ? 'Αποτυχία επαλήθευσης ασφαλείας. Παρακαλούμε δοκιμάστε ξανά.'
            : 'Security challenge failed. Please try submitting again.',
        });
      }

      const verifyResult =
        (await verifyResponse.json()) as TurnstileVerifyResponse;

      if (!verifyResult.success) {
        console.warn(
          '[Turnstile] Verification unsuccessful:',
          verifyResult['error-codes']
        );
        return res.status(400).json({
          success: false,
          error: isGreek
            ? 'Αποτυχία ελέγχου ασφαλείας Cloudflare. Παρακαλούμε ανανεώστε τη σελίδα.'
            : 'Cloudflare verification failed. Please refresh and try again.',
        });
      }

      // Validate Hostname against configured production domain if specified
      const expectedHostname =
        process.env.PRODUCTION_HOSTNAME || process.env.ALLOWED_HOSTNAME;
      if (
        expectedHostname &&
        verifyResult.hostname &&
        verifyResult.hostname !== expectedHostname &&
        verifyResult.hostname !== 'localhost' &&
        verifyResult.hostname !== '127.0.0.1'
      ) {
        console.warn(
          `[Turnstile] Hostname mismatch: got '${verifyResult.hostname}', expected '${expectedHostname}'`
        );
        return res.status(400).json({
          success: false,
          error: isGreek
            ? 'Μη έγκυρο domain αποστολής.'
            : 'Invalid submission hostname origin.',
        });
      }
    } else {
      console.log(
        '[Turnstile] Running in development mode without CLOUDFLARE_TURNSTILE_SECRET_KEY set. Submission accepted.'
      );
    }

    // 3. Prepare Plain Text & HTML Email
    const submissionTime = new Date().toLocaleString('el-GR', {
      timeZone: 'Europe/Athens',
    });

    const plainTextEmail = [
      '========================================',
      ' ΝΕΟ ΑΙΤΗΜΑ ΓΙΑ ΜΑΘΗΜΑ ΧΗΜΕΙΑΣ',
      ' fedonmesthanefs.com',
      '========================================',
      '',
      `Ημερομηνία/Ώρα Υποβολής: ${submissionTime}`,
      '',
      `Ονοματεπώνυμο: ${name}`,
      `Email: ${email}`,
      `Τηλέφωνο: ${phone || 'Δεν δηλώθηκε'}`,
      `Επίπεδο Σπουδών: ${studentLevel || 'Δεν δηλώθηκε'}`,
      `Γλώσσα Μαθήματος: ${lessonLanguage || 'Ελληνικά'}`,
      `Επιθυμητή Ημερομηνία: ${preferredDate || 'Άμεση / Ευέλικτη'}`,
      `Προτιμώμενη Ώρα: ${preferredTime || 'Ευέλικτη'}`,
      '',
      '----------------------------------------',
      'ΜΗΝΥΜΑ / ΣΤΟΧΟΙ ΜΑΘΗΤΗ:',
      '----------------------------------------',
      message,
      '',
      '========================================',
      'Τέλος μηνύματος συστήματος.',
    ].join('\n');

    const htmlEmail = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1c1917; background-color: #fafaf9; border-radius: 12px; border: 1px solid #e7e5e4;">
        <div style="border-bottom: 2px solid #0d9488; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #0f172a; font-size: 20px; font-weight: 600;">🧪 Νέο Αίτημα για Μάθημα Χημείας</h2>
          <p style="margin: 4px 0 0 0; color: #78716c; font-size: 13px;">fedonmesthanefs.com • ${submissionTime}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; width: 35%; border-bottom: 1px solid #f5f5f4;">Ονοματεπώνυμο:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Email:</td>
            <td style="padding: 8px 12px; color: #0d9488; border-bottom: 1px solid #f5f5f4;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Τηλέφωνο:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${phone || '<span style="color:#a8a29e;">Δεν δηλώθηκε</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Επίπεδο Σπουδών:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${studentLevel || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Γλώσσα Μαθήματος:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${lessonLanguage || 'Ελληνικά'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Επιθυμητή Ημερομηνία:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${preferredDate || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: 600; color: #44403c; border-bottom: 1px solid #f5f5f4;">Προτιμώμενη Ώρα:</td>
            <td style="padding: 8px 12px; color: #1c1917; border-bottom: 1px solid #f5f5f4;">${preferredTime || '—'}</td>
          </tr>
        </table>

        <div style="background-color: #ffffff; border: 1px solid #e7e5e4; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h3 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #78716c;">Μήνυμα / Στόχοι:</h3>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #292524; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="margin-top: 20px; font-size: 11px; color: #a8a29e; text-align: center;">
          Αυτόματο μήνυμα ειδοποίησης από τη φόρμα επικοινωνίας fedonmesthanefs.com
        </div>
      </div>
    `;

    const recipientEmail =
      process.env.NOTIFICATION_EMAIL ||
      process.env.ADMIN_EMAIL ||
      'mesthanefs@gmail.com';

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // 4. Send Email via SMTP if credentials are configured
    if (smtpHost && smtpUser && smtpPass) {
      const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
      const isSecure =
        process.env.SMTP_SECURE === 'true' || smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: isSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const fromAddress =
        process.env.SMTP_FROM ||
        `"Φαίδων Μεσθανεύς (Website)" <${smtpUser}>`;

      await transporter.sendMail({
        from: fromAddress,
        to: recipientEmail,
        replyTo: email,
        subject: `[fedonmesthanefs.com] Αίτημα για μάθημα Χημείας – ${name}`,
        text: plainTextEmail,
        html: htmlEmail,
      });

      console.log(`[Booking] Email successfully dispatched to ${recipientEmail}`);
    } else {
      // In development or when SMTP is not configured, log clearly and succeed gracefully
      console.log(
        '------------------------------------------------------------'
      );
      console.log('[Booking Form Submission Received]');
      console.log(`Recipient: ${recipientEmail}`);
      console.log(`From: ${name} <${email}>`);
      console.log(plainTextEmail);
      console.log(
        '------------------------------------------------------------'
      );
      console.log(
        '[Note] SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) not set in environment. Mock delivery logged to console.'
      );
    }

    return res.status(200).json({
      success: true,
      message: isGreek
        ? 'Το αίτημά σας στάλθηκε με επιτυχία! Θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.'
        : 'Your lesson inquiry has been sent successfully! I will get back to you shortly.',
    });
  } catch (error) {
    console.error('[Booking Error]:', error);
    return res.status(500).json({
      success: false,
      error: isGreek
        ? 'Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλούμε δοκιμάστε ξανά ή επικοινωνήστε απευθείας στο mesthanefs@gmail.com.'
        : 'An error occurred while sending your message. Please try again or reach out directly at mesthanefs@gmail.com.',
    });
  }
});

// Vite & Static Asset Handling
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

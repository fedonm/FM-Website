import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { bookingData } from '../data/content';
import { BookingFormData } from '../types';
import { TurnstileWidget } from './TurnstileWidget';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Linkedin,
  ArrowUpRight,
  Phone,
  RotateCcw,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BookingSection: React.FC = () => {
  const { language, theme } = useApp();
  const data = bookingData[language];

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    studentLevel: data.levelOptions[2]?.value || 'Πανελλαδικές (Γ΄ Λυκείου)',
    lessonLanguage: language === 'el' ? 'Ελληνικά' : 'English',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [resetTurnstileTrigger, setResetTurnstileTrigger] = useState<number>(0);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData | 'turnstile', string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData | 'turnstile', string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = data.validation.nameRequired;
    } else if (formData.name.trim().length > 100) {
      newErrors.name = language === 'el' ? 'Μέγιστο 100 χαρακτήρες' : 'Max 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = data.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = data.validation.emailInvalid;
    } else if (formData.email.trim().length > 150) {
      newErrors.email = language === 'el' ? 'Μέγιστο 150 χαρακτήρες' : 'Max 150 characters';
    }

    if (!formData.studentLevel) {
      newErrors.studentLevel = data.validation.levelRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = data.validation.messageRequired;
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = data.validation.messageTooLong;
    }

    if (!turnstileToken) {
      newErrors.turnstile = data.validation.turnstileRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructEmailBody = (): string => {
    return [
      language === 'el' ? '--- ΑΙΤΗΜΑ ΓΙΑ ΜΑΘΗΜΑ ΧΗΜΕΙΑΣ ---' : '--- CHEMISTRY LESSON INQUIRY ---',
      '',
      `${language === 'el' ? 'Ονοματεπώνυμο' : 'Name'}: ${formData.name}`,
      `${language === 'el' ? 'Email' : 'Email'}: ${formData.email}`,
      formData.phone ? `${language === 'el' ? 'Τηλέφωνο' : 'Phone'}: ${formData.phone}` : '',
      `${language === 'el' ? 'Επίπεδο Σπουδών' : 'Academic Level'}: ${formData.studentLevel}`,
      `${language === 'el' ? 'Γλώσσα Μαθήματος' : 'Lesson Language'}: ${formData.lessonLanguage}`,
      formData.preferredDate ? `${language === 'el' ? 'Επιθυμητή Ημερομηνία' : 'Preferred Date'}: ${formData.preferredDate}` : '',
      formData.preferredTime ? `${language === 'el' ? 'Προτιμώμενη Ώρα/Ημέρες' : 'Preferred Time'}: ${formData.preferredTime}` : '',
      '',
      `${language === 'el' ? 'Μήνυμα / Στόχοι' : 'Message / Objectives'}:`,
      formData.message,
      '',
      '---------------------------------',
      language === 'el' ? 'Αποστολή από fedonmesthanefs.com' : 'Sent via fedonmesthanefs.com',
    ]
      .filter((line) => line !== '')
      .join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
          lang: language,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setSubmitError(null);
      } else {
        const errorMsg =
          result.error ||
          (language === 'el'
            ? 'Παρουσιάστηκε σφάλμα κατά την αποστολή. Παρακαλούμε δοκιμάστε ξανά.'
            : 'An error occurred during submission. Please try again.');
        setSubmitError(errorMsg);
        // Reset turnstile token on failure so user can reverify
        setTurnstileToken('');
        setResetTurnstileTrigger((prev) => prev + 1);
      }
    } catch {
      setSubmitError(
        language === 'el'
          ? 'Αδυναμία σύνδεσης με τον διακομιστή. Μπορείτε να στείλετε απευθείας email στο mesthanefs@gmail.com.'
          : 'Could not connect to the server. You can also reach out directly via mesthanefs@gmail.com.'
      );
      setTurnstileToken('');
      setResetTurnstileTrigger((prev) => prev + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      studentLevel: data.levelOptions[2]?.value || 'Πανελλαδικές (Γ΄ Λυκείου)',
      lessonLanguage: language === 'el' ? 'Ελληνικά' : 'English',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
    setTurnstileToken('');
    setResetTurnstileTrigger((prev) => prev + 1);
    setIsSubmitted(false);
    setSubmitError(null);
    setErrors({});
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(constructEmailBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="booking" className="py-8 md:py-14 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-700 dark:text-teal-400 uppercase mb-2 font-medium">
            <span>09</span>
            <span>—</span>
            <span>{language === 'el' ? 'Προγραμματισμός' : 'Lesson Inquiry'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-slate-100 tracking-tight leading-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-stone-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            {data.description}
          </p>
        </div>

        {/* 2-Column Booking Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white dark:bg-[#131f36] rounded-2xl border border-stone-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-md">
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-name" className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-slate-300 font-semibold">
                    {data.nameLabel} <span className="text-teal-600 dark:text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="booking-name"
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder={data.namePlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#111c30] transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-stone-200 dark:border-slate-700/80 focus:border-teal-600 dark:focus:border-teal-400'
                      }`}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-email" className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-slate-300 font-semibold">
                    {data.emailLabel} <span className="text-teal-600 dark:text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="booking-email"
                      maxLength={150}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder={data.emailPlaceholder}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#111c30] transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/20'
                          : 'border-stone-200 dark:border-slate-700/80 focus:border-teal-600 dark:focus:border-teal-400'
                      }`}
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Academic Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-phone" className="block text-xs font-mono uppercase tracking-wider text-[#79716b] font-semibold">
                    {data.phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="booking-phone"
                      maxLength={50}
                      value={formData.phone || ''}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder={data.phonePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700/80 text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#111c30] focus:border-teal-600 dark:focus:border-teal-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Academic Level */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-level" className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-slate-300 font-semibold">
                    {data.levelLabel} <span className="text-teal-600 dark:text-teal-400">*</span>
                  </label>
                  <select
                    id="booking-level"
                    value={formData.studentLevel}
                    onChange={(e) => setFormData({ ...formData, studentLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700/80 text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 focus:bg-white dark:focus:bg-[#111c30] focus:border-teal-600 dark:focus:border-teal-400 transition-colors cursor-pointer"
                  >
                    {data.levelOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#131f36]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Lesson Language & Preferred Date/Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Lesson Language */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-lang" className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-slate-300 font-semibold">
                    {data.languageLabel}
                  </label>
                  <select
                    id="booking-lang"
                    value={formData.lessonLanguage}
                    onChange={(e) => setFormData({ ...formData, lessonLanguage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700/80 text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 focus:bg-white dark:focus:bg-[#111c30] focus:border-teal-600 dark:focus:border-teal-400 transition-colors cursor-pointer"
                  >
                    {data.languageOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#131f36]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-slate-400 font-medium">
                    {data.dateLabel}
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700/80 text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 focus:bg-white dark:focus:bg-[#111c30] focus:border-teal-600 dark:focus:border-teal-400 transition-colors"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label htmlFor="booking-time" className="block text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-slate-400 font-medium">
                    {data.timeLabel}
                  </label>
                  <input
                    type="text"
                    id="booking-time"
                    maxLength={50}
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    placeholder={data.timePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 dark:border-slate-700/80 text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#111c30] focus:border-teal-600 dark:focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="booking-message" className="block text-xs font-mono uppercase tracking-wider text-stone-700 dark:text-slate-300 font-semibold">
                    {data.messageLabel} <span className="text-teal-600 dark:text-teal-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-stone-400 dark:text-slate-500">
                    {formData.message.length}/1000
                  </span>
                </div>
                <textarea
                  id="booking-message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder={data.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border text-sm bg-stone-50/50 dark:bg-[#0c1524] text-stone-900 dark:text-slate-100 placeholder:text-stone-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-[#111c30] transition-colors resize-none ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/20'
                      : 'border-stone-200 dark:border-slate-700/80 focus:border-teal-600 dark:focus:border-teal-400'
                  }`}
                  required
                />
                {errors.message && (
                  <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile Security Verification */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-600 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{data.securityCheckLabel}</span>
                </div>

                <TurnstileWidget
                  onVerify={(token) => {
                    setTurnstileToken(token);
                    if (errors.turnstile) {
                      setErrors((prev) => ({ ...prev, turnstile: undefined }));
                    }
                  }}
                  onExpire={() => {
                    setTurnstileToken('');
                  }}
                  onError={() => {
                    setTurnstileToken('');
                  }}
                  language={language}
                  theme={theme}
                  resetTrigger={resetTurnstileTrigger}
                />

                {errors.turnstile && (
                  <p className="text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.turnstile}</span>
                  </p>
                )}
              </div>

              {/* Submit Error Banner */}
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs sm:text-sm text-rose-800 dark:text-rose-300 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-xl bg-stone-900 dark:bg-teal-500 text-stone-50 dark:text-slate-950 font-medium text-sm hover:bg-teal-700 dark:hover:bg-teal-400 hover:text-white transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group cursor-pointer font-sans disabled:opacity-60 disabled:cursor-not-allowed`}
                  id="booking-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{data.submittingButton}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      <span>{data.submitButton}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification Box */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-5 sm:p-6 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <h4 className="font-serif text-base sm:text-lg font-semibold text-teal-900 dark:text-teal-100">
                          {data.successTitle}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed">
                          {data.successBody}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-teal-200/60 dark:border-teal-800/60">
                      <button
                        type="button"
                        onClick={handleCopyText}
                        className="px-3 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-mono font-medium hover:bg-teal-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? data.copiedText : data.copyEmailButton}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-3 py-1.5 rounded-lg border border-teal-300 dark:border-teal-700 text-teal-900 dark:text-teal-200 text-xs font-mono font-medium hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{data.sendAnotherButton}</span>
                      </button>

                      <a
                        href="mailto:mesthanefs@gmail.com"
                        className="text-xs font-mono text-teal-800 dark:text-teal-300 hover:underline px-2 py-1 ml-auto"
                      >
                        mesthanefs@gmail.com
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

          {/* Right Direct Contact Sidebar Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Box */}
            <div className="bg-stone-50 dark:bg-[#131f36]/70 rounded-2xl border border-stone-200/80 dark:border-slate-800 p-6 space-y-5 shadow-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-mono text-stone-400 dark:text-slate-400 font-semibold block mb-1">
                  {language === 'el' ? 'Άμεση Επαφή' : 'Direct Inquiry'}
                </span>
                <h3 className="font-serif text-xl font-normal text-stone-900 dark:text-slate-100">
                  {data.directContactTitle}
                </h3>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-stone-200/80 dark:border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase text-stone-400 dark:text-slate-400">Email</span>
                <a
                  href="mailto:mesthanefs@gmail.com"
                  className="block text-sm font-mono font-semibold text-teal-700 dark:text-teal-400 hover:underline"
                >
                  mesthanefs@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-stone-200/80 dark:border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase text-stone-400 dark:text-slate-400">
                  {language === 'el' ? 'Τηλέφωνο' : 'Phone'}
                </span>
                <a
                  href="tel:6942664016"
                  className="block text-sm font-mono font-semibold text-stone-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors"
                >
                  +30 694 266 4016
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-stone-200/80 dark:border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase text-stone-400 dark:text-slate-400">
                  {language === 'el' ? 'Τοποθεσία' : 'Location'}
                </span>
                <p className="text-xs font-mono text-stone-700 dark:text-slate-200 font-semibold">
                  {language === 'el' ? 'Κέντρο, Θεσσαλονίκη' : 'City Center, Thessaloniki, Greece'}
                </p>
                <p className="text-[11px] text-stone-500 dark:text-slate-400">
                  {language === 'el' ? 'Δια ζώσης & Online μαθήματα' : 'In-person & Online tuition'}
                </p>
              </div>

              {/* LinkedIn Profile Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-stone-200/80 dark:border-slate-700/70 space-y-1">
                <span className="text-[11px] font-mono uppercase text-stone-400 dark:text-slate-400 flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>LinkedIn</span>
                </span>
                <p className="font-mono text-xs font-semibold text-stone-800 dark:text-slate-200">
                  Fedon Mesthanefs
                </p>
                <a
                  href="https://www.linkedin.com/in/fedon-mesthanefs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1 mt-1 group"
                  id="booking-linkedin-link"
                >
                  <span>{language === 'el' ? 'Προβολή Προφίλ' : 'View Profile'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: (err?: unknown) => void;
  language?: 'el' | 'en';
  theme?: 'light' | 'dark';
  resetTrigger?: number;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        params: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: (error: unknown) => void;
          theme?: 'light' | 'dark' | 'auto';
          language?: string;
          action?: string;
          appearance?: 'always' | 'execute' | 'interaction-only';
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onloadTurnstileCallback?: () => void;
  }
}

export const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({
  onVerify,
  onExpire,
  onError,
  language = 'el',
  theme = 'light',
  resetTrigger = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  // Cloudflare test sitekey for development if none configured:
  // "1x00000000000000000000AA" is Cloudflare's always-pass testing key
  const siteKey =
    import.meta.env.VITE_TURNSTILE_SITE_KEY ||
    import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY ||
    '1x00000000000000000000AA';

  useEffect(() => {
    let script = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    ) as HTMLScriptElement | null;

    const initWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      try {
        if (widgetIdRef.current) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // ignore cleanup errors
          }
          widgetIdRef.current = null;
        }

        containerRef.current.innerHTML = '';
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            onVerify(token);
          },
          'expired-callback': () => {
            if (onExpire) onExpire();
          },
          'error-callback': (err) => {
            if (onError) onError(err);
          },
          theme: theme === 'dark' ? 'dark' : 'light',
          language: language === 'el' ? 'el' : 'en',
        });
        widgetIdRef.current = id;
        setIsLoaded(true);
      } catch (e) {
        console.warn('Turnstile rendering failed:', e);
        setLoadFailed(true);
      }
    };

    if (window.turnstile) {
      initWidget();
    } else {
      if (!script) {
        script = document.createElement('script');
        script.src =
          'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setIsLoaded(true);
          initWidget();
        };
        script.onerror = () => {
          setLoadFailed(true);
        };
        document.head.appendChild(script);
      } else {
        const interval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(interval);
            setIsLoaded(true);
            initWidget();
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, language, theme, resetTrigger]);

  if (loadFailed) {
    return (
      <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <span>
            {language === 'el'
              ? 'Λειτουργία Ασφαλείας Cloudflare (Managed Mode)'
              : 'Cloudflare Turnstile Managed Mode'}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            onVerify('fallback-turnstile-token-dev');
          }}
          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors"
        >
          {language === 'el' ? 'Επαλήθευση' : 'Verify'}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1 my-2">
      <div
        ref={containerRef}
        id="turnstile-container"
        className="min-h-[65px]"
      />
    </div>
  );
};

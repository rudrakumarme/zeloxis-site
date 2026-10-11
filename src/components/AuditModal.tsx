import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { CONTACT_EMAIL, PLATFORMS } from '../content';

const FIELD_CLASS =
  'w-full px-4 py-3 rounded-xl bg-surface-pure border border-border-subtle text-sm text-on-surface placeholder:text-zinc-muted focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-fixed';

export function AuditModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setSent(false);
    firstFieldRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // No backend: the request is handed to the visitor's own mail app, addressed to us.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get('name')}`,
      `Store: ${data.get('store')}`,
      `Platform: ${data.get('platform')}`,
      '',
      'The chore I most want to automate:',
      `${data.get('chore')}`,
    ].join('\n');
    const subject = `Automation audit request from ${data.get('name')}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="audit-title">
      <div className="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-surface rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-zinc-muted hover:bg-surface-container cursor-pointer"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 id="audit-title" className="text-2xl font-extrabold text-on-surface font-display tracking-tight pr-8">
          Book a free automation audit
        </h2>

        {sent ? (
          <div className="mt-4">
            <p className="text-sm text-zinc-body leading-relaxed">
              Your mail app should have opened with the request filled in. Press send there and we will reply with times for the call.
            </p>
            <p className="mt-4 text-sm text-zinc-body leading-relaxed">
              Nothing opened? Email us directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
            <button onClick={onClose} className="mt-6 px-6 py-3 rounded-full bg-surface-container text-primary text-sm font-semibold cursor-pointer">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <p className="text-sm text-zinc-body">Four quick answers so the call starts with your store, not small talk.</p>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-on-surface">Your name</span>
              <input ref={firstFieldRef} name="name" required autoComplete="name" className={FIELD_CLASS} placeholder="Alex Morgan" />
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-on-surface">Store name or link</span>
              <input name="store" required className={FIELD_CLASS} placeholder="yourstore.com" />
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-on-surface">Where you sell</span>
              <select name="platform" className={FIELD_CLASS} defaultValue={PLATFORMS[0]}>
                {PLATFORMS.map((platform) => (
                  <option key={platform}>{platform}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-on-surface">The chore you most want gone</span>
              <textarea
                name="chore"
                required
                rows={3}
                className={`${FIELD_CLASS} resize-none`}
                placeholder="Every morning I copy yesterday's orders into a spreadsheet…"
              />
            </label>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary text-white text-sm font-semibold glow-primary cursor-pointer"
            >
              Send request
              <ArrowRight size={16} />
            </button>
            <p className="text-xs text-zinc-muted text-center">Opens your mail app with the request ready to send.</p>
          </form>
        )}
      </div>
    </div>
  );
}

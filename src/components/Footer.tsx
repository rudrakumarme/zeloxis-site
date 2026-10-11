import { CONTACT_EMAIL, NAV_LINKS } from '../content';
import { Wordmark } from './Header';

export function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="max-w-xs">
          <Wordmark light />
          <p className="mt-4 text-sm text-inverse-on-surface/70 leading-relaxed">AI automation for e-commerce and DTC brands.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-block text-sm font-semibold text-white underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-inverse-on-surface/80 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-4 md:px-6 py-5 text-xs text-inverse-on-surface/60">© {new Date().getFullYear()} Zeloxis. All rights reserved.</p>
      </div>
    </footer>
  );
}

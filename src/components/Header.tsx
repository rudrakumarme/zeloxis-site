import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../content';

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Zeloxis home">
      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center shadow-sm">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 6h12L6 18h12" />
        </svg>
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-on-surface'}`}>
        Zeloxis
      </span>
    </a>
  );
}

export function Header({ onOpenAudit }: { onOpenAudit: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled || menuOpen ? 'bg-surface/85 backdrop-blur-xl border-b border-border-subtle' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Wordmark />

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-body hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAudit}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-on-surface text-white text-sm font-semibold hover:bg-primary transition-colors cursor-pointer"
          >
            Free audit
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 pb-5 flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-xl text-base font-medium text-on-surface hover:bg-surface-container"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenAudit();
            }}
            className="mt-2 px-5 py-3 rounded-full bg-on-surface text-white text-sm font-semibold cursor-pointer"
          >
            Book a free audit
          </button>
        </nav>
      )}
    </header>
  );
}

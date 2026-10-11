import { useEffect, useState } from 'react';
import { ArrowRight, Check, GitBranch, Send, Sparkles, Webhook } from 'lucide-react';
import { FLOW_STEPS, HERO } from '../content';

const STEP_ICONS = [Webhook, Sparkles, GitBranch, Send];
const STEP_MS = 1600;

function FlowCard() {
  // `active` walks 0..FLOW_STEPS.length; the final value holds every step as done before looping.
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(FLOW_STEPS.length);
      return;
    }
    const id = window.setInterval(() => setActive((step) => (step + 1) % (FLOW_STEPS.length + 2)), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-primary-container/25 via-secondary-container/15 to-transparent blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-3xl bg-surface-pure border border-border-subtle shadow-2xl shadow-primary/10 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-subtle bg-surface-container-low">
          <span className="font-mono text-xs text-zinc-muted">example · ai-lead-qualifier</span>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-accent-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            running
          </span>
        </div>

        <ol className="p-5 sm:p-6">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            const done = active > idx;
            const current = active === idx;
            const last = idx === FLOW_STEPS.length - 1;
            return (
              <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                {!last && (
                  <span
                    className={`absolute left-[19px] top-10 bottom-0 w-0.5 transition-colors duration-500 ${done ? 'bg-primary-container' : 'bg-border-subtle'}`}
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`relative shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    done
                      ? 'bg-primary-container text-white'
                      : current
                        ? 'bg-primary-fixed text-primary ring-4 ring-primary-fixed/60'
                        : 'bg-surface-container text-zinc-muted'
                  }`}
                >
                  {done ? <Check size={18} strokeWidth={3} /> : <Icon size={18} />}
                </span>
                <div className={`min-w-0 transition-opacity duration-500 ${done || current ? 'opacity-100' : 'opacity-45'}`}>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{step.kind}</span>
                  <p className="text-sm font-bold text-on-surface font-display">{step.title}</p>
                  <p className="text-xs text-zinc-muted mt-0.5">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export function Hero({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-pure border border-border-glass text-xs font-semibold text-primary shadow-xs">
            <Sparkles size={14} />
            {HERO.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-surface font-display leading-[1.05]">
            {HERO.headline}{' '}
            <span className="bg-gradient-to-r from-primary-container to-secondary bg-clip-text text-transparent">{HERO.headlineAccent}</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-body leading-relaxed max-w-xl">{HERO.sub}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-primary-container to-secondary text-white text-sm font-semibold glow-primary glow-primary-hover transition-all cursor-pointer"
            >
              {HERO.primaryCta}
              <ArrowRight size={16} />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-surface-pure border border-border-subtle text-on-surface text-sm font-semibold hover:border-primary-container transition-colors"
            >
              {HERO.secondaryCta}
            </a>
          </div>
          <p className="mt-5 text-xs text-zinc-muted">30 minutes. You leave with a written map of what to automate first.</p>
        </div>

        <FlowCard />
      </div>
    </section>
  );
}

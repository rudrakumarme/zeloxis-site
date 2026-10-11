import type { ReactNode } from 'react';
import { ArrowRight, BarChart3, BellRing, Check, ChevronDown, Inbox, MessageSquareReply, Receipt, Tags } from 'lucide-react';
import { FAQS, PRICING, PROCESS, PROOF, SERVICES } from '../content';

const SERVICE_ICONS = {
  receipt: Receipt,
  tags: Tags,
  reply: MessageSquareReply,
  bell: BellRing,
  inbox: Inbox,
  chart: BarChart3,
};

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mb-10 md:mb-14">
      <span className="text-xs font-bold text-primary uppercase tracking-wider">{eyebrow}</span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface font-display">{title}</h2>
      {sub && <p className="mt-4 text-base text-zinc-body leading-relaxed">{sub}</p>}
    </div>
  );
}

function Section({ id, tinted = false, children }: { id: string; tinted?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 md:py-24 ${tinted ? 'bg-surface-container-low' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

export function Services() {
  return (
    <Section id="services" tinted>
      <SectionHeading
        eyebrow="What we automate"
        title="The chores that eat a store owner's week."
        sub="If you do it the same way every time, a workflow can do it for you. These are the ones we build most."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.icon];
          return (
            <article
              key={service.title}
              className="p-6 rounded-2xl bg-surface-pure border border-border-subtle hover:border-primary-container hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <span className="w-11 h-11 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 text-base font-bold text-on-surface font-display">{service.title}</h3>
              <p className="mt-2 text-sm text-zinc-body leading-relaxed">{service.body}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function Proof({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <Section id="proof">
      <div className="rounded-3xl bg-inverse-surface text-inverse-on-surface p-7 sm:p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-container/30 blur-3xl" aria-hidden="true" />
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <span className="text-xs font-bold text-primary-fixed-dim uppercase tracking-wider">{PROOF.eyebrow}</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">{PROOF.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-inverse-on-surface/85">{PROOF.body}</p>
            <p className="mt-6 pl-4 border-l-2 border-primary-fixed-dim text-sm leading-relaxed text-inverse-on-surface/75">{PROOF.note}</p>
            <button
              onClick={onOpenAudit}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-on-surface text-sm font-semibold hover:bg-primary-fixed transition-colors cursor-pointer"
            >
              Watch them run on a call
              <ArrowRight size={16} />
            </button>
          </div>

          <ul className="flex flex-col gap-3 self-center">
            {PROOF.workflows.map((workflow) => (
              <li key={workflow.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-accent-emerald/20 text-accent-emerald flex items-center justify-center">
                  <Check size={14} strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">{workflow.title}</h3>
                  <p className="mt-1 text-sm text-inverse-on-surface/75">{workflow.body}</p>
                </div>
                <span className="ml-auto self-start font-mono text-[11px] text-accent-emerald whitespace-nowrap">live</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" tinted>
      <SectionHeading eyebrow="Process" title="From first call to hands-off, in four steps." />
      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS.map((step, idx) => (
          <li key={step.title} className="p-6 rounded-2xl bg-surface-pure border border-border-subtle">
            <span className="font-mono text-sm font-semibold text-primary">0{idx + 1}</span>
            <h3 className="mt-3 text-lg font-bold text-on-surface font-display">{step.title}</h3>
            <p className="mt-2 text-sm text-zinc-body leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Pricing({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Priced by the job, quoted before we start."
        sub="Ranges depend on how many tools are involved and how messy the edge cases are. You get a fixed quote after the audit."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        {PRICING.map((tier) => (
          <article
            key={tier.name}
            className={`relative p-6 rounded-3xl flex flex-col ${
              tier.featured ? 'bg-surface-pure border-2 border-primary-container shadow-xl shadow-primary/10' : 'bg-surface-pure border border-border-subtle'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-primary-container to-secondary text-white text-[11px] font-semibold">
                Most complete
              </span>
            )}
            <h3 className="text-sm font-bold text-zinc-muted uppercase tracking-wider">{tier.name}</h3>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-2xl font-extrabold text-on-surface font-display tracking-tight whitespace-nowrap">{tier.price}</span>
              {tier.unit && <span className="text-xs text-zinc-muted font-medium">{tier.unit}</span>}
            </p>
            <p className="mt-3 text-sm text-zinc-body leading-relaxed">{tier.summary}</p>
            <ul className="mt-5 mb-6 space-y-2.5 text-sm text-zinc-body">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent-emerald" strokeWidth={3} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenAudit}
              className={`mt-auto w-full py-3 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                tier.featured ? 'bg-on-surface text-white hover:bg-primary' : 'bg-surface-container text-primary hover:bg-surface-container-high'
              }`}
            >
              {tier.cta}
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" tinted>
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title="Questions we get on the first call." />
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-surface-pure border border-border-subtle open:shadow-md open:shadow-primary/5">
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-base font-bold text-on-surface font-display">
                {faq.q}
                <ChevronDown size={18} className="shrink-0 text-zinc-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm text-zinc-body leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCta({ onOpenAudit }: { onOpenAudit: () => void }) {
  return (
    <Section id="audit">
      <div className="rounded-3xl bg-gradient-to-br from-primary-container to-secondary p-8 sm:p-14 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display max-w-2xl mx-auto">
          Tell us the chore you are most tired of.
        </h2>
        <p className="mt-4 text-base text-white/85 max-w-xl mx-auto">
          The audit is free. You leave with a written map of your three biggest bottlenecks, whether or not you build with us.
        </p>
        <button
          onClick={onOpenAudit}
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary text-sm font-semibold hover:bg-primary-fixed transition-colors cursor-pointer"
        >
          Book a free automation audit
          <ArrowRight size={16} />
        </button>
      </div>
    </Section>
  );
}

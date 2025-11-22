import React from 'react'
import type { PageKey } from '../types/navigation'

interface PaymentDetailHeroProps {
  eyebrow: string
  title: string
  description: string
  stats: { label: string; value: string }[]
  bullets: string[]
  steps: { title: string; body: string }[]
  ctaLabel: string
  ctaHref?: string
  ctaSubtext: string
  supportTitle: string
  supportLines: string[]
  onNavigate?: (destination: PageKey) => void
}

const PaymentDetailHero: React.FC<PaymentDetailHeroProps> = ({
  eyebrow,
  title,
  description,
  stats,
  bullets,
  steps,
  ctaLabel,
  ctaHref,
  ctaSubtext,
  supportTitle,
  supportLines,
  onNavigate
}) => {
  return (
    <section className="relative w-full h-[1387px] overflow-hidden bg-[url('/homepage/Background.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[linear-gradient(270deg,_rgba(0,0,0,0)_16.94%,_rgba(0,0,0,0.7)_59.65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(72,159,232,0.56),_rgba(72,159,232,0.56))]" />
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-12 py-16 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-10 text-white">
            <div className="flex-1">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
                {eyebrow}
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
              <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">{description}</p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/20 bg-white/10 px-5 py-6 shadow-[0_25px_80px_rgba(3,18,39,0.35)] backdrop-blur"
                  >
                    <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
                    <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-4 text-lg text-white/90">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-[#78c8ff]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {onNavigate && (
                <button
                  type="button"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white"
                  onClick={() => onNavigate('makeAnnualPayments')}
                >
                  ← Back to Make Annual Payments
                </button>
              )}
            </div>

            <div className="flex-1">
              <div className="rounded-[32px] border border-white/25 bg-white/10 p-8 shadow-[0_30px_90px_rgba(4,20,45,0.45)] backdrop-blur">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-lg font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-xl font-semibold">{step.title}</p>
                        <p className="text-white/80 text-base mt-1">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 space-y-4">
                  {ctaHref ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white px-6 py-4 text-lg font-semibold text-[#2d98ef] shadow-[0_25px_60px_rgba(3,20,46,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                      {ctaLabel}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white px-6 py-4 text-lg font-semibold text-[#2d98ef] shadow-[0_25px_60px_rgba(3,20,46,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                      {ctaLabel}
                    </button>
                  )}
                  <p className="text-center text-white/70 text-sm">{ctaSubtext}</p>
                </div>

                <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">{supportTitle}</p>
                  <div className="mt-4 space-y-2 text-lg font-semibold">
                    {supportLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentDetailHero



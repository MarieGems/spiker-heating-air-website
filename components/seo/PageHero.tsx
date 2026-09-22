import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
}) {
  return (
    <section className="bg-ink pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-5">
          {eyebrow}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2.1rem, 5vw, 3.6rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
          }}
          className="text-white mb-6"
        >
          {title}
        </h1>
        {description && (
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

import { Phone, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import { PHONE, PHONE_HREF, SCHEDULE_HREF } from '@/components/brand'

export default function InlineCTA({
  heading = 'Ready to get this fixed?',
  description = 'Call Spiker. Ask for Jay or Bo. Same day or next day appointments across the Wichita metro.',
}: {
  heading?: string
  description?: string
}) {
  return (
    <div className="bg-ink rounded-3xl p-8 md:p-10 text-center">
      <h3
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        className="text-white text-2xl md:text-3xl mb-3 tracking-tight"
      >
        {heading}
      </h3>
      <p className="text-white/55 text-base leading-relaxed max-w-xl mx-auto mb-7">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={PHONE_HREF}
          className="animate-pulse-ring relative flex items-center justify-center gap-2 bg-urgent text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-urgent/90 active:scale-[0.98] transition-all"
        >
          <Phone size={16} weight="fill" />
          {PHONE}
        </a>
        <a
          href={SCHEDULE_HREF}
          className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold text-sm px-7 py-3.5 rounded-full hover:bg-brand-primary/90 active:scale-[0.98] transition-all"
        >
          <EnvelopeSimple size={16} weight="bold" />
          Email For a Quote
        </a>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { Check, X } from '@phosphor-icons/react/dist/ssr'
import PageLayout from '@/components/seo/PageLayout'
import PageHero from '@/components/seo/PageHero'
import InlineCTA from '@/components/seo/InlineCTA'
import RelatedLinks from '@/components/seo/RelatedLinks'
import BackHome from '@/components/seo/BackHome'
import { LICENSE } from '@/components/brand'

export const metadata: Metadata = {
  title: 'Wichita HVAC Company: What to Look for First',
  description:
    'Questions worth asking before you hire any Wichita HVAC company, and what actually separates a good one from a slow one.',
}

const QUESTIONS = [
  'Are they actually licensed, and will they tell you their license number without you having to ask twice?',
  'Are they listed with the Better Business Bureau, and can you look them up?',
  'How soon can they realistically get a technician to your door — today, tomorrow, or "sometime this week"?',
  'Will the quote be in writing, before any repair work starts?',
  'Is the person who answers the phone the same business that shows up at your door, or a dispatcher for a rotating pool of contractors?',
  'Will they explain what’s actually wrong in plain language, or just tell you what it costs?',
]

const REALITY_CHECK = [
  {
    common: 'A lot of homeowners report waiting three to five days just to get a technician scheduled, especially in peak summer heat.',
    lookFor: 'A company that can tell you honestly whether they can get to you same day or next day — and has a track record of actually doing it.',
  },
  {
    common: 'It’s common to get a different technician every visit, with no continuity on what’s already been tried.',
    lookFor: 'A smaller, consistent team where the same few people know your system and your history.',
  },
  {
    common: 'Licensing and insurance can be hard to verify before someone is already in your house.',
    lookFor: 'A company that states its license number up front, unprompted, and is easy to look up with the state and the BBB.',
  },
  {
    common: 'Calls and texts to some companies go unanswered for days, especially outside of business hours.',
    lookFor: 'A company that actually picks up, or calls back the same day.',
  },
]

export default function WichitaACRepairGuidePage() {
  const related = [
    { href: '/how-to/ac-repair-wichita-ks', label: 'AC Repair in Wichita, KS: Signs & Common Causes' },
    { href: '/how-to/signs-your-ac-needs-repair', label: '10 Signs Your AC Needs Repair in Wichita' },
    { href: '/how-to/hvac-maintenance-checklist-wichita', label: 'HVAC Maintenance Checklist for Wichita Homes' },
  ]

  return (
    <PageLayout>
      <PageHero
        eyebrow="Choosing an HVAC Company"
        title="What to Look for in a Wichita HVAC Company (Before You Call)"
        description="You don't need to become an HVAC expert to hire the right one. You need to know what to ask, and what a straight answer actually sounds like."
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <BackHome />
          </div>

          <div className="mb-14">
            <h2
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              className="text-ink text-2xl md:text-3xl tracking-tight mb-5"
            >
              Six questions worth asking before you hire anyone
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-6">
              None of these are trick questions. A company that&rsquo;s worth hiring should be able to
              answer every one of them without hesitating.
            </p>
            <ul className="space-y-3">
              {QUESTIONS.map((q, i) => (
                <li key={i} className="flex gap-3 bg-white rounded-2xl p-4 border border-border">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary-pale flex items-center justify-center mt-0.5 text-brand-primary text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-ink-soft text-sm leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              className="text-ink text-2xl md:text-3xl tracking-tight mb-5"
            >
              What homeowners commonly run into, and what to look for instead
            </h2>
            <p className="text-ink-muted text-base leading-relaxed mb-6">
              This isn&rsquo;t about any one company &mdash; it&rsquo;s the pattern of complaints that
              show up again and again when people talk about shopping for HVAC service.
            </p>
            <div className="space-y-4">
              {REALITY_CHECK.map((row, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border bg-white flex flex-col md:flex-row">
                  <div className="flex-1 flex gap-3 px-5 py-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-ink/5 flex items-center justify-center mt-0.5">
                      <X size={13} weight="bold" className="text-ink-muted" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-ink-muted/70 mb-1.5">
                        Common Complaint
                      </p>
                      <p className="text-ink-muted text-sm leading-snug">{row.common}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex gap-3 bg-brand-primary-pale/40 px-5 py-4 border-t md:border-t-0 md:border-l border-border">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center mt-0.5">
                      <Check size={13} weight="bold" className="text-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-brand-primary/80 mb-1.5">
                        Look For
                      </p>
                      <p className="text-ink text-sm font-medium leading-snug">{row.lookFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              className="text-ink text-2xl md:text-3xl tracking-tight mb-5"
            >
              Where Spiker fits
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              Spiker Heating &amp; Air is a family-owned Wichita business that&rsquo;s been running
              since 2013. It&rsquo;s licensed ({LICENSE}) and listed with the BBB, and same day or
              next day appointments are the standard, not the exception.
            </p>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              There&rsquo;s no call center and no rotating pool of subcontractors &mdash; when you
              call, you&rsquo;re talking to the same family business that shows up. Ask for Jay or Bo.
            </p>
            <p className="text-ink-soft text-base leading-relaxed">
              That doesn&rsquo;t make Spiker the right fit for every job or every schedule &mdash; but
              it&rsquo;s exactly what the six questions above are built to surface, whoever you end up
              calling.
            </p>
          </div>

          <div className="mb-14">
            <InlineCTA />
          </div>

          <div className="mb-4">
            <RelatedLinks links={related} />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

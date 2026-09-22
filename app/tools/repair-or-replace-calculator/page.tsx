import type { Metadata } from 'next'
import Calculator from './Calculator'
import PageLayout from '@/components/seo/PageLayout'
import PageHero from '@/components/seo/PageHero'
import RelatedLinks from '@/components/seo/RelatedLinks'
import BackHome from '@/components/seo/BackHome'

export const metadata: Metadata = {
  title: 'Repair or Replace? AC & Furnace Cost Calculator',
  description:
    'A free, no-signup tool that reasons through whether to repair or replace your AC or furnace, built for Wichita homeowners.',
}

export default function RepairOrReplaceCalculatorPage() {
  const related = [
    { href: '/how-to/signs-your-ac-needs-repair', label: '10 Signs Your AC Needs Repair in Wichita' },
    { href: '/how-to/preventative-maintenance-hvac-wichita', label: 'What’s Included in HVAC Preventative Maintenance' },
    { href: '/how-to/hvac-maintenance-checklist-wichita', label: 'HVAC Maintenance Checklist for Wichita Homes' },
  ]

  return (
    <PageLayout>
      <PageHero
        eyebrow="Free Tool · No Signup"
        title="Repair or Replace? AC & Furnace Cost Calculator"
        description="Two numbers — your system's age and the repair estimate — run through the same reasoning a lot of Wichita homeowners work through on their own. No email required."
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <BackHome />
          </div>

          <Calculator />

          <div className="mt-14 mb-14">
            <h2
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
              className="text-ink text-2xl md:text-3xl tracking-tight mb-5"
            >
              How this tool thinks about it
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              Repair-or-replace usually comes down to two things: how much life is realistically
              left in the system, and how much this particular repair costs relative to starting
              over with a new one. Older systems that need an expensive repair are the clearest
              case for replacing &mdash; you&rsquo;re not just paying for this fix, you&rsquo;re
              likely paying for the next one too. Younger systems with a small repair are the
              clearest case for just fixing it.
            </p>
            <p className="text-ink-soft text-base leading-relaxed mb-4">
              The harder cases are in between &mdash; an older system with a cheap fix, or a young
              system with an expensive one. That&rsquo;s exactly where this calculator is meant to
              help you think it through, not replace a real diagnosis. A technician looking at your
              actual system can tell you things a calculator can&rsquo;t: how the rest of the system
              is holding up, whether a repair is likely to be a one-time fix or the first of several,
              and what a straight, no-pressure quote looks like for either path.
            </p>
            <p className="text-ink-soft text-base leading-relaxed">
              Spiker Heating &amp; Air offers same day or next day appointments across the Wichita
              metro if you want that second opinion in person rather than in a spreadsheet.
            </p>
          </div>

          <div className="mb-4">
            <RelatedLinks links={related} />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

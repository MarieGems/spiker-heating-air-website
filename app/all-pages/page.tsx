import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, House, Wrench, BookOpen } from '@phosphor-icons/react/dist/ssr'
import PageLayout from '@/components/seo/PageLayout'
import PageHero from '@/components/seo/PageHero'
import { HOW_TO_PAGES } from '@/app/how-to/data'

export const metadata: Metadata = {
  title: 'All Pages | Spiker Heating & Air',
  description: 'Every page on this site in one place — the homepage, guides, the free calculator, and the full how-to library.',
}

function Card({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group h-full flex flex-col bg-white rounded-3xl p-6 border border-border hover:border-brand-primary/40 hover:shadow-[0_8px_30px_-8px_rgba(237,28,36,0.15)] transition-all"
    >
      <p className="text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
        {eyebrow}
      </p>
      <h3
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        className="text-ink text-lg tracking-tight mb-2"
      >
        {title}
      </h3>
      <p className="text-ink-muted text-sm leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-brand-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        View page <ArrowRight size={11} weight="bold" />
      </span>
    </Link>
  )
}

function SectionHeading({
  icon: Icon,
  title,
  note,
}: {
  icon: typeof House
  title: string
  note: string
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-9 h-9 rounded-xl bg-brand-primary-pale flex items-center justify-center shrink-0">
        <Icon size={18} weight="fill" className="text-brand-primary" />
      </span>
      <div>
        <h2
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          className="text-ink text-xl tracking-tight"
        >
          {title}
        </h2>
        <p className="text-ink-muted text-xs">{note}</p>
      </div>
    </div>
  )
}

export default function AllPagesHub() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Site Map"
        title="Every Page on This Site"
        description="One place to browse the whole build — the homepage, the guides, the free tool, and the full how-to library — instead of clicking through one at a time."
      />

      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <div className="mb-14">
            <SectionHeading icon={House} title="Homepage" note="The main landing page" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card
                href="/"
                eyebrow="Landing Page"
                title="Spiker Heating & Air — Home"
                description="The full scroll-driven landing page: hero, why-choose-us comparison, services, real reviews, and the call-to-action."
              />
            </div>
          </div>

          <div className="mb-14">
            <SectionHeading
              icon={Wrench}
              title="Guides & Tools"
              note="Tier 1 trust page and the Tier 2 free tool"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card
                href="/wichita-ac-repair-guide"
                eyebrow="Choosing an HVAC Company"
                title="What to Look for in a Wichita HVAC Company"
                description="Six questions worth asking before you hire anyone, and where Spiker fits — no named competitors, just the pattern of complaints homeowners run into."
              />
              <Card
                href="/tools/repair-or-replace-calculator"
                eyebrow="Free Tool · No Signup"
                title="Repair or Replace? Cost Calculator"
                description="A genuinely interactive tool — enter your system's age and repair estimate and it reasons through whether repair or replacement usually makes more sense."
              />
            </div>
          </div>

          <div>
            <SectionHeading
              icon={BookOpen}
              title="How-To Library"
              note={`${HOW_TO_PAGES.length} local guides on repair, troubleshooting, and maintenance`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HOW_TO_PAGES.map((page) => (
                <Card
                  key={page.slug}
                  href={`/how-to/${page.slug}`}
                  eyebrow={page.eyebrow}
                  title={page.h1}
                  description={page.metaDescription}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageLayout>
  )
}

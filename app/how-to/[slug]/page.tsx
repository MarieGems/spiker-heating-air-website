import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HOW_TO_PAGES, getHowToPage } from '../data'
import PageLayout from '@/components/seo/PageLayout'
import PageHero from '@/components/seo/PageHero'
import InlineCTA from '@/components/seo/InlineCTA'
import RelatedLinks from '@/components/seo/RelatedLinks'
import BackHome from '@/components/seo/BackHome'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export function generateStaticParams() {
  return HOW_TO_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getHowToPage(slug)
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  }
}

export default async function HowToPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = getHowToPage(slug)
  if (!page) notFound()

  const related = page.relatedSlugs
    .map((s) => getHowToPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ href: `/how-to/${p.slug}`, label: p.h1 }))

  return (
    <PageLayout>
      <PageHero eyebrow={page.eyebrow} title={page.h1} description={page.intro} />

      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <BackHome />
          </div>

          <div className="space-y-12">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                  className="text-ink text-2xl md:text-3xl tracking-tight mb-4"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-ink-soft text-base leading-relaxed mb-4 last:mb-0">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2.5">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-ink-soft text-base leading-relaxed">
                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="my-14">
            <InlineCTA
              heading="Need help with this in Wichita?"
              description="Spiker Heating & Air has been a family-owned Wichita business since 2013, licensed and BBB listed. Same day or next day appointments — ask for Jay or Bo."
            />
          </div>

          <div className="mb-12">
            <RelatedLinks links={related} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Link
              href="/wichita-ac-repair-guide"
              className="group flex items-center justify-between gap-3 bg-white rounded-2xl p-5 border border-border hover:border-brand-primary/40 transition-all"
            >
              <span className="text-ink font-semibold text-sm">
                What to look for in a Wichita HVAC company
              </span>
              <ArrowRight size={14} weight="bold" className="text-brand-primary shrink-0" />
            </Link>
            <Link
              href="/tools/repair-or-replace-calculator"
              className="group flex items-center justify-between gap-3 bg-white rounded-2xl p-5 border border-border hover:border-brand-primary/40 transition-all"
            >
              <span className="text-ink font-semibold text-sm">
                Free tool: Repair or Replace Calculator
              </span>
              <ArrowRight size={14} weight="bold" className="text-brand-primary shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export type RelatedLink = { href: string; label: string; note?: string }

export default function RelatedLinks({
  heading = 'Keep reading',
  links,
}: {
  heading?: string
  links: RelatedLink[]
}) {
  if (!links.length) return null
  return (
    <div>
      <p className="text-ink-muted text-xs font-bold tracking-[0.2em] uppercase mb-4">
        {heading}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block bg-white rounded-2xl p-5 border border-border hover:border-brand-primary/40 hover:shadow-[0_8px_30px_-8px_rgba(237,28,36,0.15)] transition-all"
          >
            <p className="text-ink font-semibold text-sm leading-snug mb-1">{link.label}</p>
            {link.note && <p className="text-ink-muted text-xs mb-2">{link.note}</p>}
            <span className="inline-flex items-center gap-1 text-brand-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Read more <ArrowRight size={11} weight="bold" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

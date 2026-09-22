import Link from 'next/link'
import Logo from './Logo'
import { COMPANY_NAME, PHONE, PHONE_HREF, ADDRESS, HOURS, LICENSE } from './brand'

const RESOURCE_LINKS = [
  { href: '/all-pages', label: 'Browse All Pages →' },
  { href: '/wichita-ac-repair-guide', label: 'Choosing a Wichita HVAC Company' },
  { href: '/tools/repair-or-replace-calculator', label: 'Repair or Replace Calculator' },
  { href: '/how-to/signs-your-ac-needs-repair', label: 'Signs Your AC Needs Repair' },
  { href: '/how-to/hvac-maintenance-checklist-wichita', label: 'HVAC Maintenance Checklist' },
]

export default function Footer() {
  return (
    <footer className="bg-warm-dark border-t border-black/6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 border-b border-black/6">
        <p className="text-ink-muted text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
          Resources
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {RESOURCE_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? 'text-brand-primary text-xs font-bold hover:text-brand-primary/70 transition-colors'
                  : 'text-ink-soft text-xs hover:text-brand-primary transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo compact />
        <p className="text-ink-muted text-xs text-center">
          {/* Hardcoded, not new Date().getFullYear() — this is a static export, so a
              client-computed year would match the build-time server render right up
              until the next Jan 1 with no rebuild, then mismatch and trigger a
              hydration warning on every load until this page is rebuilt. */}
          &copy; 2026 {COMPANY_NAME} · Licensed {LICENSE} &amp; BBB Listed · {ADDRESS}
        </p>
        <div className="flex flex-col items-center md:items-end gap-0.5">
          <a href={PHONE_HREF} className="text-ink-soft text-xs hover:text-brand-primary transition-colors font-medium">
            {PHONE}
          </a>
          <span className="text-ink-muted text-[11px]">{HOURS}</span>
        </div>
      </div>
    </footer>
  )
}

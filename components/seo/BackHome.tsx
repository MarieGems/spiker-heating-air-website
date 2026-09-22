import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr'

export default function BackHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-ink-muted hover:text-brand-primary text-xs font-semibold transition-colors"
    >
      <ArrowLeft size={12} weight="bold" />
      Back to the Spiker Heating &amp; Air homepage
    </Link>
  )
}

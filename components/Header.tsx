'use client'

import { useEffect, useState } from 'react'
import { Phone } from '@phosphor-icons/react'
import Logo from './Logo'
import { PHONE, PHONE_HREF } from './brand'

export default function Header() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-[#0E0F14]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
      }`}
    >
      {/* Portfolio-concept disclaimer — always solid (not scroll-reactive like the
          rest of the header), matching the same banner pattern already used on the
          other marieharvey.com portfolio-concept subdomains (e.g. RSKIN Studio) */}
      <div className="bg-warm text-ink-muted text-center text-[11px] leading-tight py-2 px-4 border-b border-black/8">
        <strong className="font-bold text-ink-soft">Portfolio Concept</strong> &mdash; Unofficial
        redesign created for demonstration purposes. Not affiliated with or operated by the real
        Spiker Heating &amp; Air.
      </div>

      {/* Mobile emergency strip — the whole bar is the tap target, not just the
          phone-number text, since a ~17px underlined link is too small and
          precise to hit one-handed on a "my AC just died" panic tap */}
      <a
        href={PHONE_HREF}
        className="md:hidden bg-urgent flex items-center justify-center gap-2.5 py-3 px-4 active:bg-urgent/80"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-breathe" />
        <span className="text-white text-[11px] font-bold tracking-widest uppercase">HVAC Emergency?</span>
        <span className="text-white text-[11px] font-bold underline underline-offset-2">{PHONE}</span>
      </a>

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="/" aria-label="Spiker Heating & Air home">
          <Logo />
        </a>
        <a
          href={PHONE_HREF}
          className="animate-pulse-ring hidden md:flex items-center gap-2 bg-urgent text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-urgent/90 active:scale-[0.98] transition-all"
        >
          <Phone size={14} weight="fill" />
          Emergency: {PHONE}
        </a>
      </div>
    </header>
  )
}

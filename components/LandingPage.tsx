'use client'

import { useRef, useEffect, useCallback } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import {
  Phone,
  EnvelopeSimple,
  ArrowRight,
  Star,
  Quotes,
  Snowflake,
  Flame,
  Fan,
  Leaf,
  Wrench,
  SealCheck,
  ArrowDown,
  Check,
  X,
} from '@phosphor-icons/react'
import Header from './Header'
import Footer from './Footer'
import {
  COMPANY_NAME,
  PHONE,
  PHONE_HREF,
  SCHEDULE_HREF,
  LICENSE,
  SERVICE_AREA,
} from './brand'

const FRAME_COUNT = 61

// ─── Content ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    text: "Caring, professional, efficient and quick. From the ladies in the office gently reminding me of a bill I forgot to pay instead of sending it to collections, to the owner himself, a master technician, coming out to fix our air when another company didn't and wouldn't respond to texts or calls. They came out first thing the morning after we called at 6pm, drove all over town to get the part we needed, and had us back up and running by 4. The best. I'll never recommend anyone else.",
    name: 'Katie',
    loc: 'Wichita, KS',
    service: 'AC Repair',
  },
  {
    text: "We woke up on a Saturday to our AC unit blowing hot air overnight. Called Spiker at 8am on a Saturday, left a message, and quickly received a call back. Jay was out by 11:45 and we had cold air on by 12:15. They were extremely easy to work with and fairly priced. I will be using Spiker again for any HVAC needs.",
    name: 'David F.',
    loc: 'Wichita, KS',
    service: 'AC Repair',
  },
  {
    text: "My dogs chewed the wires off the outside unit. I called Spiker and they were able to come out the same day and had us up and running again in no time. Very friendly and affordable. Will definitely continue to use them.",
    name: 'Saisha F.',
    loc: 'Wichita, KS',
    service: 'AC Repair',
  },
]

const SERVICES = [
  {
    Icon: Snowflake,
    name: 'Air Conditioning Service',
    note: 'AC repair and install, every make and size.',
  },
  {
    Icon: Flame,
    name: 'Furnace & Heater Repair',
    note: 'Local, family run heating repair and installs.',
  },
  {
    Icon: Fan,
    name: 'Duct-Free Split Systems',
    note: 'Maintenance and repair for ductless comfort.',
  },
  {
    Icon: Leaf,
    name: 'Air Quality',
    note: 'Indoor air runs 2 to 5x more polluted than outside.',
  },
  {
    Icon: Wrench,
    name: 'Preventative Maintenance',
    note: 'Tune-ups that stretch your system’s life.',
  },
  {
    Icon: SealCheck,
    name: 'LG HVAC Products',
    note: 'Sales, install, and service on LG equipment.',
  },
]

const COMPARISON = [
  { them: 'Waits of 3 to 5 days just to get on the schedule', us: 'Same day or next day appointments, every time' },
  { them: 'A different company, a different tech every visit', us: 'One Wichita family, same business since 2013' },
  { them: 'No way to check who is actually showing up', us: `Licensed, ${LICENSE}, and listed with the BBB` },
  { them: 'Called and texted a company that never called back', us: 'Ask for Jay or Bo. We pick up.' },
]

const STATS = [
  { n: '2013', label: 'Family Owned Since' },
  { n: '20+', label: 'Years Combined Experience' },
  { n: '7', label: 'Wichita Metro Cities Served' },
  { n: 'Same Day', label: 'Or Next Day Service' },
]

// ─── Utility ──────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Video Scroll Sequence / Hero ──────────────────────────────────────────────

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number>(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const overlay1Opacity = useTransform(scrollYProgress, [0, 0.07, 0.22, 0.3], [0, 1, 1, 0])
  const overlay1Y      = useTransform(scrollYProgress, [0, 0.07], [30, 0])
  const overlay2Opacity = useTransform(scrollYProgress, [0.3, 0.39, 0.55, 0.64], [0, 1, 1, 0])
  const overlay2Y      = useTransform(scrollYProgress, [0.3, 0.39], [30, 0])
  const overlay3Opacity = useTransform(scrollYProgress, [0.64, 0.74, 1], [0, 1, 1])
  const overlay3Y      = useTransform(scrollYProgress, [0.64, 0.74], [30, 0])
  const arrowOpacity   = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    const frame = framesRef.current[index]
    if (!canvas || !frame?.complete || !frame.naturalWidth) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (canvas.width !== frame.naturalWidth) {
      canvas.width = frame.naturalWidth
      canvas.height = frame.naturalHeight
    }
    ctx.drawImage(frame, 0, 0)
  }, [])

  useEffect(() => {
    const frames: HTMLImageElement[] = []
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image()
      img.src = `/frames/frame_${String(i).padStart(3, '0')}.jpg`
      if (i === 1) img.onload = () => drawFrame(0)
      frames.push(img)
    }
    framesRef.current = frames
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [drawFrame])

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const idx = Math.min(FRAME_COUNT - 1, Math.round(p * (FRAME_COUNT - 1)))
    if (idx !== currentFrameRef.current) {
      currentFrameRef.current = idx
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => drawFrame(idx))
    }
  })

  return (
    <section ref={containerRef} style={{ height: '350vh' }}>
      <div className="sticky top-0 min-h-[100dvh] overflow-hidden bg-ink">
        {/* Canvas - faded into background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'cover', opacity: 0.25 }}
        />
        {/* Heavy dark veil so frames read as atmospheric, not literal */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />

        {/* Copy overlays — each one centers itself independently so overlay 3's
            button row (a different height than overlay 1's heading block) never
            gets pushed past the bottom edge and clipped by overflow-hidden */}

        {/* Overlay 1 */}
        <motion.div
          style={{ opacity: overlay1Opacity, y: overlay1Y }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl">
              <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-5">
                Wichita, KS · Family Owned Since 2013 · Licensed &amp; BBB Listed
              </p>
              <h1
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                className="text-white mb-5"
              >
                Your AC dies on the<br />hottest day of the year.
              </h1>
              <p className="text-white/60 text-xl leading-relaxed">
                We pick up the phone. We show up. Same day or next day, no exceptions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overlay 2 */}
        <motion.div
          style={{ opacity: overlay2Opacity, y: overlay2Y }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl">
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
                className="text-white mb-5"
              >
                One Wichita family.{' '}
                <span className="text-brand-primary">Same business</span>
                <br />since 2013.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Father, uncles, brothers, cousins, wives &mdash; now teaching their own kids
                the business. The people who show up at your door are the people who own it.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overlay 3 - CTA */}
        <motion.div
          style={{ opacity: overlay3Opacity, y: overlay3Y }}
          className="absolute inset-0 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl">
              <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Licensed, {LICENSE} · BBB Listed · 20+ Years Combined Experience
              </p>
              <h2
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', lineHeight: 1.06, letterSpacing: '-0.02em' }}
                className="text-white mb-7"
              >
                Wichita&rsquo;s straightforward<br />
                <span className="text-brand-primary">heating &amp; air</span> company.
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="animate-pulse-ring relative flex items-center justify-center gap-2 bg-urgent text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-urgent/90 active:scale-[0.98] transition-all"
                >
                  <Phone size={16} weight="fill" />
                  Emergency: {PHONE}
                </a>
                <a
                  href={SCHEDULE_HREF}
                  className="flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-brand-primary/90 active:scale-[0.98] transition-all"
                >
                  Email For a Quote
                  <ArrowRight size={15} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Honest Section ───────────────────────────────────────────────────────────

function HonestSection() {
  return (
    <section className="bg-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Why Wichita Homeowners Choose {COMPANY_NAME}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.06,
              letterSpacing: '-0.02em',
            }}
            className="text-white"
          >
            Every other HVAC company{' '}
            <span className="text-brand-accent">makes you wait.</span>
            <br />We show up the same day.
          </h2>
        </FadeIn>

        {/* Comparison grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Soft brand glow so the block doesn't sit flat on pure black */}
          <div
            className="absolute -inset-x-20 -inset-y-16 -z-10 opacity-40 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, var(--color-brand-primary), transparent)' }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            {COMPARISON.map((row, i) => (
              <FadeIn key={i} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl overflow-hidden border border-white/8 flex bg-[#111318]">
                  <div className="flex-1 flex gap-3 px-5 py-4">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-white/6 flex items-center justify-center mt-0.5">
                      <X size={13} weight="bold" className="text-white/30" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/20 mb-1.5">Others</p>
                      <p className="text-white/35 text-sm leading-snug line-through decoration-white/20">{row.them}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex gap-3 bg-brand-primary/10 px-5 py-4 border-l border-white/8">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center mt-0.5">
                      <Check size={13} weight="bold" className="text-white" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-brand-primary/70 mb-1.5">Spiker</p>
                      <p className="text-white text-sm font-medium leading-snug">{row.us}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Stat bar */}
        <FadeIn delay={0.4} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ n, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                }}
                className="text-brand-primary"
              >
                {n}
              </span>
              <span className="text-white/40 text-sm">{label}</span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section className="bg-warm py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          <FadeIn>
            <p className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#B8931C' }}>What We Do</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
              }}
              className="text-ink mb-6"
            >
              Six services.<br />
              <span className="text-brand-primary">One honest standard.</span>
            </h2>
            <p className="text-ink-muted text-base leading-relaxed max-w-xs mb-8">
              Quoted straight. Explained in plain language. Fixed right the first time.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Licensed', 'BBB Listed', 'Family Owned Since 2013', 'LG Products'].map((badge) => (
                <span key={badge} className="bg-ink/5 border border-ink/10 text-ink-soft text-xs font-medium px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {SERVICES.map(({ Icon, name, note }, i) => (
              <FadeIn key={name} delay={i * 0.09} className="h-full">
                <a
                  href={SCHEDULE_HREF}
                  className="group h-full block bg-white rounded-3xl p-6 border border-border hover:border-brand-primary/40 hover:shadow-[0_8px_30px_-8px_rgba(237,28,36,0.15)] transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-brand-primary-pale flex items-center justify-center mb-4">
                    <Icon size={22} weight="fill" className="text-brand-primary" />
                  </div>
                  <h3
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                    className="text-ink text-xl tracking-tight mb-1"
                  >
                    {name}
                  </h3>
                  <p className="text-ink-muted text-sm">{note}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-brand-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Ask about this <ArrowRight size={12} weight="bold" />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews Section ──────────────────────────────────────────────────────────

function ReviewsSection() {
  return (
    <section className="bg-ink-soft py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">Real Reviews</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
              }}
              className="text-white"
            >
              What Wichita homeowners actually say.
            </h2>
          </div>
          <p className="text-white/35 text-sm max-w-xs">
            We don&rsquo;t write these. Our customers do.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Soft brand glow so the grid doesn't sit flat on the panel */}
          <div
            className="absolute -inset-x-20 -inset-y-16 -z-10 opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, var(--color-brand-primary), transparent)' }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-stretch">
            {/* Featured review — the most specific, vivid one, given real visual weight */}
            <FadeIn className="md:col-span-3 h-full">
              <div className="relative h-full bg-gradient-to-br from-white/8 to-white/[0.03] rounded-3xl p-8 md:p-10 border border-white/10 flex flex-col overflow-hidden">
                <div
                  className="absolute -top-6 -right-4 -z-0 pointer-events-none select-none"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '9rem', fontWeight: 700, color: 'var(--color-brand-primary)', opacity: 0.08, lineHeight: 1 }}
                  aria-hidden
                >
                  &rdquo;
                </div>
                <Quotes size={36} weight="fill" className="text-brand-primary mb-5 relative" />
                <p className="text-white text-xl md:text-2xl leading-snug font-medium flex-1 mb-8 relative" style={{ letterSpacing: '-0.01em' }}>
                  &ldquo;{REVIEWS[0].text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10 relative">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <span style={{ fontFamily: 'var(--font-display)' }} className="text-white font-bold text-lg">
                      {REVIEWS[0].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{REVIEWS[0].name}</p>
                    <p className="text-white/40 text-sm">{REVIEWS[0].loc} · {REVIEWS[0].service}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => <Star key={j} size={15} weight="fill" className="text-brand-accent" />)}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Remaining reviews, stacked */}
            <div className="md:col-span-2 flex flex-col gap-5">
              {REVIEWS.slice(1).map((r, i) => (
                <FadeIn key={i} delay={(i + 1) * 0.1} className="flex-1">
                  <div className="h-full bg-white/5 rounded-3xl p-6 border border-white/8 flex flex-col">
                    <Quotes size={22} weight="fill" className="text-brand-primary/30 mb-3" />
                    <p className="text-white/75 text-sm leading-relaxed flex-1 mb-5">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                      <div className="w-8 h-8 rounded-full bg-brand-primary-pale flex items-center justify-center shrink-0">
                        <span style={{ fontFamily: 'var(--font-display)' }} className="text-brand-primary font-bold text-xs">
                          {r.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-xs">{r.name}</p>
                        <p className="text-white/35 text-[11px]">{r.loc} · {r.service}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(5)].map((_, j) => <Star key={j} size={10} weight="fill" className="text-brand-accent" />)}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

// Slow looping crossfade through a handful of the hero's already-bundled frames —
// gives the CTA a sense of motion without generating any new footage. Pure CSS
// keyframes (not Framer Motion) so the loop runs on its own timeline and never
// depends on a JS mount/animate cycle completing.
const CTA_FRAMES = [6, 20, 34, 48]
const CTA_CYCLE_SECONDS = CTA_FRAMES.length * 4

function CTABackground() {
  return (
    // No z-index here on purpose — the parent <section> is `relative` but never
    // sets its own z-index, so it doesn't establish a stacking context. A
    // negative z-index on this wrapper would escape to the nearest ancestor
    // that DOES establish one and can end up painted behind unrelated earlier
    // content on the page. Plain DOM order (this renders first, before the
    // section's other overlay divs and text) is enough to keep it in back —
    // the same approach the hero's canvas layer already uses.
    <div className="absolute inset-0 overflow-hidden">
      {CTA_FRAMES.map((frame, i) => (
        <img
          key={frame}
          src={`/frames/frame_${String(frame).padStart(3, '0')}.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover animate-cta-frame"
          style={{
            animationDuration: `${CTA_CYCLE_SECONDS}s`,
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}
      {/* Veil matching the hero's actual range (dips to ~40-50%, not a flat
          85-95% wall) so the image is still legible instead of nearly invisible */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/55 to-ink/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />
    </div>
  )
}

function CTASection() {
  return (
    <section className="relative bg-ink py-28 md:py-36 overflow-hidden">
      <CTABackground />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/15 via-transparent to-brand-accent/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <FadeIn>
          <p className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Same Day Or Next Day Service · Licensed · Family Owned Since 2013
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.03em',
            }}
            className="text-white mb-6"
          >
            Wichita&rsquo;s straightforward<br />
            <span className="text-brand-primary">heating &amp; air</span> team is one call away.
          </h2>
          <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Call Spiker. Ask for Jay or Bo. We&rsquo;ll tell you what your system actually needs &mdash; nothing more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={PHONE_HREF}
              className="animate-pulse-ring relative flex items-center justify-center gap-2 bg-urgent text-white font-bold text-base px-8 py-4 rounded-full hover:bg-urgent/90 active:scale-[0.98] transition-all"
            >
              <Phone size={18} weight="fill" />
              {PHONE}
            </a>
            <a
              href={SCHEDULE_HREF}
              className="flex items-center justify-center gap-2 bg-brand-primary text-white font-bold text-base px-8 py-4 rounded-full hover:bg-brand-primary/90 active:scale-[0.98] transition-all"
            >
              <EnvelopeSimple size={16} weight="bold" />
              Email For a Quote
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREA.map((city) => (
              <span key={city} className="text-white/25 text-xs px-3 py-1 rounded-full border border-white/10">{city}, KS</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HonestSection />
        <ServicesSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

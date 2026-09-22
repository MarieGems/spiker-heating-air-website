import { COMPANY_NAME } from './brand'

// Real Spiker Heating & Air logo, pulled from hvacwichitaks.com.
export default function Logo({ compact = false }: { compact?: boolean }) {
  const width = compact ? 110 : 150
  const height = Math.round(width / 3.2056) // real file is 343×107
  return (
    // eslint-disable-next-line @next/next/no-img-element -- plain <img>, not next/image's
    // Image component, to avoid shadowing the native `Image` constructor HeroSection
    // uses (`new Image()`) to preload canvas frames
    <img
      src="/brand/spiker-logo.png"
      alt={COMPANY_NAME}
      width={width}
      height={height}
      className="select-none"
      style={{ width, height: 'auto' }}
    />
  )
}

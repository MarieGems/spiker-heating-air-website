import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Shared shell for every SEO/content page (Tier 1 guide, Tier 2 tool, Tier 3
// how-to pages). Header is `fixed`, so main gets top padding matching its real
// height — measured live (not guessed): the portfolio-concept disclaimer bar
// (wraps to ~3 lines at mobile widths) + the mobile emergency strip + the 64px
// logo row on small screens (163px total), just the disclaimer bar + 64px logo
// row from md up (95px total).
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-[164px] md:pt-[96px]">{children}</main>
      <Footer />
    </>
  )
}

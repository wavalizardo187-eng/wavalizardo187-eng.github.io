import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useScrollToTop } from '../../hooks/useScrollToTop'

function Layout({ children }) {
  useScrollToTop()
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-gutter pt-32 pb-section-gap">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

import { MotionConfig } from "framer-motion"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { ThemeShowcase } from "./components/theme/ThemeShowcase"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Features } from "./components/layout/Features"
import { HowItWorks } from "./components/layout/HowItWorks"
import { Testimonials } from "./components/layout/Testimonials"
import { Pricing } from "./components/layout/Pricing"
import { FAQ } from "./components/layout/FAQ"
import { CTABanner } from "./components/layout/CTABanner"
import { AmbientBackground } from "./components/layout/AmbientBackground"
import { HeroSection } from "./components/hero/HeroSection"
import { DashboardPreview } from "./components/dashboard/DashboardPreview"

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <main id="top" className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-700">
          <AmbientBackground />
          <Header />
          <HeroSection />
          <DashboardPreview />
          <ThemeShowcase />
          <HowItWorks />
          <Features />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTABanner />
          <Footer />
        </main>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App

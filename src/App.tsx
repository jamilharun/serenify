import { ThemeProvider } from "./components/theme/ThemeProvider"
import { ThemeShowcase } from "./components/theme/ThemeShowcase"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Features } from "./components/layout/Features"
import { Components } from "./components/layout/Components"
import { Pricing } from "./components/layout/Pricing"
import { FAQ } from "./components/layout/FAQ"
import { AmbientBackground } from "./components/layout/AmbientBackground"
import { HeroSection } from "./components/hero/HeroSection"
import { DashboardPreview } from "./components/dashboard/DashboardPreview"

function App() {
  return (
    <ThemeProvider>
      <main id="top" className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-700">
        <AmbientBackground />
        <Header />
        <HeroSection />
        <DashboardPreview />
        <ThemeShowcase />
        <Features />
        <Components />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App

import SplashScreen from '@/components/SplashScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Cotton from '@/components/Cotton'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="grid-pattern">
      <SplashScreen />
      <Navigation />
      <Hero />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Cotton />
      <Footer />
    </main>
  )
}

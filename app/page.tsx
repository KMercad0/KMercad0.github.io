import dynamic from 'next/dynamic'
import SplashScreen from '@/components/SplashScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Projects from '@/components/Projects'

const Automations = dynamic(() => import('@/components/Automations'))
const Experience = dynamic(() => import('@/components/Experience'))
const Skills = dynamic(() => import('@/components/Skills'))
const About = dynamic(() => import('@/components/About'))
const Cotton = dynamic(() => import('@/components/Cotton'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Navigation />
      <Hero />
      <Education />
      <Automations />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Cotton />
      <Footer />
    </main>
  )
}

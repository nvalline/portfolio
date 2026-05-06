import Hero from '@/components/Hero'
import MarqueeStrip from '@/components/Marquee'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

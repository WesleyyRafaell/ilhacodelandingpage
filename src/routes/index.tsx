import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Problems } from '../components/Problems'
import { Solutions } from '../components/Solutions'
import { Differentiators } from '../components/Differentiators'
import { Process } from '../components/Process'
import { About } from '../components/About'
import { FAQ } from '../components/FAQ'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Differentiators />
        <Process />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

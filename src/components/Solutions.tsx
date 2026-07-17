import { ArrowRight, Bot, Code2, Globe2, LifeBuoy, PlugZap, Smartphone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WaveDivider } from './WaveDivider'

const solutions = [
  {
    icon: Code2,
    title: 'Sistemas Web',
    description: 'Dashboards, CRMs, ERPs e plataformas completas para o seu negócio.',
  },
  {
    icon: Globe2,
    title: 'Sites Institucionais',
    description: 'Presença digital profissional com design premium e alto desempenho.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos',
    description: 'Apps nativos e híbridos para iOS e Android com experiência de usuário impecável.',
  },
  {
    icon: Bot,
    title: 'IA & Automação',
    description: 'Inteligência artificial aplicada a processos reais para reduzir custos e acelerar resultados.',
  },
  {
    icon: PlugZap,
    title: 'Integrações',
    description: 'Conectamos ferramentas, APIs e sistemas legados para sua operação fluir sem retrabalho.',
  },
  {
    icon: LifeBuoy,
    title: 'Evolução contínua',
    description: 'Melhorias, suporte e manutenção para seu produto acompanhar o crescimento da empresa.',
  },
]

export function Solutions() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="servicos" className="relative overflow-hidden bg-navy-500 py-28 sm:py-36">
      <WaveDivider position="top" fillClassName="fill-cream" />
      <WaveDivider position="bottom" fillClassName="fill-cream-light" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/12 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-white/8 blur-[120px]" />
      </div>

      <div ref={ref} className={`container-section relative mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-gold-500">
            Nossas soluções
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Serviços digitais para tirar sua operação do improviso.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            Cada entrega combina entendimento de negócio, experiência de uso e engenharia para criar tecnologia que funciona no dia a dia.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol, i) => {
            const Icon = sol.icon

            return (
              <div
                key={sol.title}
                className={`service-card-arise reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="service-card-icon mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-navy-500 shadow-lg shadow-gold-500/20">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {sol.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-white/65">
                  {sol.description}
                </p>
                <a
                  href="https://wa.me/5598999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card-link inline-flex items-center gap-2 text-sm font-bold text-gold-500"
                >
                  Conversar sobre isso
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { BarChart3, Bot, ClipboardList, Layers3, PhoneCall, Workflow } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: ClipboardList,
    title: 'Processos manuais',
    description:
      'Planilhas infinitas, tarefas repetitivas e retrabalho que consomem o tempo da sua equipe.',
  },
  {
    icon: BarChart3,
    title: 'Pouca visibilidade',
    description:
      'Sem dados confiáveis em tempo real, decisões são tomadas no escuro e oportunidades se perdem.',
  },
  {
    icon: PhoneCall,
    title: 'Atendimento lento',
    description:
      'Clientes esperando resposta, filas de suporte e dificuldade para escalar o atendimento.',
  },
  {
    icon: Workflow,
    title: 'Sistemas travados',
    description:
      'Plataformas lentas, integrações quebradas e ferramentas que não conversam entre si.',
  },
  {
    icon: Layers3,
    title: 'Presença digital fraca',
    description:
      'Site desatualizado, sem identidade visual forte e perdendo credibilidade no mercado.',
  },
  {
    icon: Bot,
    title: 'IA sem estratégia',
    description:
      'Ferramentas de IA sendo usadas sem planejamento, sem integração real com o negócio.',
  },
]

export function Problems() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="pb-20 pt-4 sm:pb-24">
      <div ref={ref} className={`container-section mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_2.05fr] lg:items-stretch">
          <div className="rounded-3xl bg-navy-500 p-7 text-white shadow-xl shadow-navy-500/15">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-gold-500">
              Dores comuns
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
              Menos limitações. <span className="text-gold-500">Mais possibilidades.</span>
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
              Identificamos gargalos operacionais e transformamos em produtos digitais claros, escaláveis e fáceis de evoluir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => {
              const Icon = problem.icon

              return (
                <div
                  key={problem.title}
                  className={`card-animation group rounded-2xl border border-navy-500/10 bg-white/65 p-5 backdrop-blur-sm reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-500/12 text-gold-600 transition-all duration-[560ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-1 group-hover:bg-gold-500 group-hover:text-navy-500">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-500">
                    {problem.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-ink-light">
                    {problem.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const problems = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
      </svg>
    ),
    title: 'Processos manuais',
    description:
      'Planilhas infinitas, tarefas repetitivas e retrabalho que consomem o tempo da sua equipe.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
    title: 'Pouca visibilidade',
    description:
      'Sem dados confiáveis em tempo real, decisões são tomadas no escuro e oportunidades se perdem.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: 'Atendimento lento',
    description:
      'Clientes esperando resposta, filas de suporte e dificuldade para escalar o atendimento.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 15h6" /><path d="M9 11h6" />
      </svg>
    ),
    title: 'Sistemas travados',
    description:
      'Plataformas lentas, integrações quebradas e ferramentas que não conversam entre si.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Presença digital fraca',
    description:
      'Site desatualizado, sem identidade visual forte e perdendo credibilidade no mercado.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'IA sem estratégia',
    description:
      'Ferramentas de IA sendo usadas sem planejamento, sem integração real com o negócio.',
  },
]

import { useScrollReveal } from '../hooks/useScrollReveal'

export function Problems() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="servicos" className="py-24 sm:py-28">
      <div ref={ref} className={`container-section mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-navy-500">
            Dores comuns
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
            Menos limitações.<br />
            <span className="text-gold-500">Mais possibilidades.</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink-light">
            Identificamos os gargalos que travam o crescimento e resolvemos com tecnologia sob medida.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`group rounded-2xl border border-navy-500/8 bg-white/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-navy-500/15 hover:bg-white hover:shadow-lg reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/5 text-navy-500 transition-all group-hover:bg-navy-500/10">
                {problem.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-navy-500">
                {problem.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink-light">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

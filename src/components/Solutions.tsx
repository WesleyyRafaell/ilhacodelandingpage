const solutions = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
    title: 'Sistemas Web',
    description: 'Dashboards, CRMs, ERPs e plataformas completas para o seu negócio.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Sites Institucionais',
    description: 'Presença digital profissional com design premium e alto desempenho.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />
      </svg>
    ),
    title: 'Aplicativos',
    description: 'Apps nativos e híbridos para iOS e Android com experiência de usuário impecável.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'IA & Automação',
    description: 'Inteligência artificial aplicada a processos reais para reduzir custos e acelerar resultados.',
  },
]

import { useScrollReveal } from '../hooks/useScrollReveal'

export function Solutions() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal()

  return (
    <section className="">
      <div className="container-section mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div ref={textRef} className={`reveal ${textVisible ? 'visible' : ''}`}>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Nossas soluções
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
              Entendemos o seu negócio, projetamos a solução e<br className="hidden lg:block" />
              <span className="text-gold-500">entregamos resultados.</span>
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-ink-light">
              Cada projeto é desenvolvido sob medida para atender às necessidades
              específicas do seu negócio — sem templates, sem improviso, sem
              soluções genéricas.
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2">
            {solutions.map((sol, i) => (
              <div
                key={sol.title}
                className={`group rounded-2xl border border-navy-500/8 bg-white/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-navy-500/15 hover:bg-white hover:shadow-lg reveal reveal-delay-${i + 1} ${cardsVisible ? 'visible' : ''}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500/5 text-navy-500 transition-all group-hover:bg-navy-500/10">
                  {sol.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy-500">
                  {sol.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink-light">
                  {sol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const differentiators = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Atendimento próximo e direto',
    description: 'Você fala direto com quem desenvolve. Sem gerentes de conta, sem burocracia.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Produto sob medida',
    description: 'Cada linha de código é escrita para resolver o seu problema, não para encaixar num template.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Código moderno e escalável',
    description: 'Tecnologias atuais, boas práticas de desenvolvimento e arquitetura preparada para crescer.',
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Evolução contínua',
    description: 'Não entregamos e sumimos. Acompanhamos, atualizamos e evoluímos o produto junto com você.',
  },
]

import { useScrollReveal } from '../hooks/useScrollReveal'

export function Differentiators() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal()
  const { ref: textRef, isVisible: textVisible } = useScrollReveal()

  return (
    <section className="py-24 sm:py-28">
      <div className="container-section mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div ref={imgRef} className={`order-2 lg:order-1 reveal ${imgVisible ? 'visible' : ''}`}>
            <div className="overflow-hidden rounded-2xl border border-navy-500/10 bg-white shadow-xl">
              <div className=" bg-gradient-to-br from-navy-500/5 via-cream to-navy-500/5">
                  <img src="/public/lencois.webp" alt="" />
              </div>
            </div>
          </div>

          <div ref={textRef} className={`order-1 lg:order-2 reveal ${textVisible ? 'visible' : ''}`}>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Diferenciais
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
              Soluções digitais <br className="hidden lg:block" />
              <span className="text-gold-500">sem fórmulas prontas.</span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-light">
              Nossos produtos têm identidade, personalidade e são feitos para gerar
              resultado de verdade.
            </p>

            <div className="mt-8 space-y-5">
              {differentiators.map((item, i) => (
                <div key={item.title} className={`flex gap-4 reveal reveal-delay-${i + 1} ${textVisible ? 'visible' : ''}`}>
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-500/5 text-navy-500">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-navy-500">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-sans text-sm leading-relaxed text-ink-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

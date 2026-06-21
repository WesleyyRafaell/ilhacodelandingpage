const steps = [
  {
    number: '01',
    title: 'Escuta',
    description:
      'Entendemos seu negócio, suas dores e seus objetivos. Tudo começa com uma conversa aberta e sem compromisso.',
    color: 'bg-navy-500',
  },
  {
    number: '02',
    title: 'Plano',
    description:
      'Desenhamos a solução ideal: escopo, cronograma, tecnologias e orçamento transparente antes de qualquer linha de código.',
    color: 'bg-navy-600',
  },
  {
    number: '03',
    title: 'Construção',
    description:
      'Desenvolvemos com entregas contínuas. Você acompanha cada etapa e valida cada funcionalidade em tempo real.',
    color: 'bg-navy-700',
  },
  {
    number: '04',
    title: 'Entrega',
    description:
      'Seu projeto no ar, documentado e com suporte contínuo. E seguimos juntos na evolução do produto.',
    color: 'bg-gold-500',
  },
]

export function Process() {
  return (
    <section id="processos" className="bg-navy-500 py-24 sm:py-28">
      <div className="container-section mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
            Nosso processo
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Um caminho claro<br />
            <span className="text-gold-500">do WhatsApp ao lançamento.</span>
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/70">
            Da primeira conversa ao projeto no ar, cada etapa é planejada para
            entregar resultado com previsibilidade e qualidade.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-xl"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white ${step.color}`}>
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

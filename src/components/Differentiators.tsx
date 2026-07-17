import { Code2, Layers3, MessageCircle, ShieldCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const differentiators = [
  {
    icon: MessageCircle,
    title: 'Atendimento próximo e direto',
    description: 'Você fala direto com quem desenvolve. Sem gerentes de conta, sem burocracia.',
  },
  {
    icon: Layers3,
    title: 'Produto sob medida',
    description: 'Cada linha de código é escrita para resolver o seu problema, não para encaixar num template.',
  },
  {
    icon: Code2,
    title: 'Código moderno e escalável',
    description: 'Tecnologias atuais, boas práticas de desenvolvimento e arquitetura preparada para crescer.',
  },
  {
    icon: ShieldCheck,
    title: 'Evolução contínua',
    description: 'Não entregamos e sumimos. Acompanhamos, atualizamos e evoluímos o produto junto com você.',
  },
]

export function Differentiators() {
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal()
  const { ref: textRef, isVisible: textVisible } = useScrollReveal()

  return (
    <section className="bg-cream-light py-24 sm:py-28">
      <div className="container-section mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div ref={imgRef} className={`order-2 lg:order-1 reveal ${imgVisible ? 'visible' : ''}`}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-navy-500/10">
                <img src="/lencois2.jpg" alt="Lençóis Maranhenses" width={634} height={720} className=" w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-2xl bg-navy-500 p-5 text-white shadow-xl shadow-navy-500/20">
                <p className="font-heading text-2xl font-bold text-gold-500">MA</p>
                <p className="mt-1 text-xs font-medium text-white/70">Lençóis maranhenses</p>
              </div>
            </div>
          </div>

          <div ref={textRef} className={`order-1 lg:order-2 reveal ${textVisible ? 'visible' : ''}`}>
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-500">
              Diferenciais
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
              Soluções digitais <br className="hidden lg:block" />
              <span className="text-gold-500">sem fórmulas prontas.</span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-light">
              Nossos produtos têm identidade, personalidade e são feitos para gerar resultado de verdade.
            </p>

            <div className="mt-8 space-y-5">
              {differentiators.map((item, i) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className={`flex gap-4 rounded-2xl border border-navy-500/8 bg-white/70 p-4 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white hover:shadow-md reveal reveal-delay-${i + 1} ${textVisible ? 'visible' : ''}`}>
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-500/6 text-navy-500">
                      <Icon className="h-5 w-5" aria-hidden="true" />
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

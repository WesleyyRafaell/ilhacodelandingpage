import { useState } from 'react'

const faqs = [
  {
    question: 'Quanto custa um sistema sob medida?',
    answer:
      'O valor depende do escopo, complexidade e prazo. Fazemos uma análise gratuita do seu projeto e apresentamos um orçamento transparente antes de qualquer compromisso',
  },
  {
    question: 'Vocês atendem empresas fora do Maranhão?',
    answer:
      'Sim! Atendemos clientes de todo o Brasil de forma 100% remota. Nosso processo é digital e transparente, você acompanha cada etapa pelo WhatsApp, reuniões online e relatórios de progresso.',
  },
  {
    question: 'E depois da entrega, vocês dão manutenção?',
    answer:
      'Com certeza. Oferecemos planos de manutenção contínua com suporte prioritário, correções, atualizações e evolução do sistema conforme seu negócio cresce. Não entregamos e sumimos.',
  },
  {
    question: 'Como funciona o orçamento pelo WhatsApp?',
    answer:
      'Você nos chama no WhatsApp, conta sobre seu projeto e agendamos uma conversa rápida. Analisamos suas necessidades e em até 48 horas devolvemos um orçamento claro, com escopo, prazo e valor definidos.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="pb-24 sm:pb-28">
      <div className="container-section mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
            Perguntas frequentes
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
            Ficou alguma dúvida?
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-navy-500/8 bg-white/60 transition-all hover:bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-heading text-lg font-semibold text-navy-500">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-navy-500 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="border-t border-navy-500/5 px-6 py-4 font-sans text-sm leading-relaxed text-ink-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

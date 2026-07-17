import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    question: 'Quanto custa um sistema sob medida?',
    answer:
      'O valor depende do escopo, complexidade e prazo. Fazemos uma análise gratuita do seu projeto e apresentamos um orçamento transparente antes de qualquer compromisso.',
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
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="bg-cream-light py-24 sm:py-28">
      <div ref={ref} className={`container-section mx-auto reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-500">
              Perguntas frequentes
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
              Ficou alguma dúvida?
            </h2>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-ink-light">
              O orçamento começa por uma conversa simples para entender escopo, urgência e impacto esperado.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-navy-500/8 bg-white/70 transition-all hover:bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="font-heading text-lg font-semibold text-navy-500">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy-500 transition-transform ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
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
      </div>
    </section>
  )
}

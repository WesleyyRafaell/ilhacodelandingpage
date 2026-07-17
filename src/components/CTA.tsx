import { MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { WaveDivider } from './WaveDivider'

export function CTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <WaveDivider position="top" fillClassName="fill-cream-light" />
      <WaveDivider position="bottom" fillClassName="fill-cream" />
      <div className="absolute inset-0">
        <img src="/boi.webp" alt="Cena cultural do Maranhão" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-navy-500/82" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/15 blur-[100px] will-change-transform" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 translate-y-1/2 rounded-full bg-white/10 blur-[100px] will-change-transform" />
      </div>

      <div ref={ref} className={`container-section relative mx-auto text-center reveal ${isVisible ? 'visible' : ''}`}>
        <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Vamos tirar sua ideia<br />
          <span className="text-gold-500">da conversa?</span>
        </h2>
        <p className={`mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-white/70 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          Mande uma mensagem no WhatsApp para receber um direcionamento inicial sobre seu projeto. Sem burocracia, sem compromisso.
        </p>
        <div className={`mt-8 flex justify-center reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://wa.me/5598989101285?text=Ol%C3%A1!%20Tudo%20bem?%20Conheci%20o%20trabalho%20de%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo%20sobre%20um%20projeto%20que%20tenho%20em%20mente.%20Podemos%20conversar?%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gold-500 px-8 py-4 font-sans text-sm font-bold text-navy-500 shadow-xl shadow-gold-500/25 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/30"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Solicitar orçamento via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const mapLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processos', href: '#processos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
]

export function Footer() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <footer className="border-t border-navy-500/10 bg-cream">
      <div ref={ref} className={`container-section mx-auto py-16 reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5" aria-label="Ilha Code">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500 text-sm font-bold text-white">
                IC
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-navy-500">
                Ilha <span className="text-gold-500">Code</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-ink-light">
              Software house maranhense especializada em desenvolvimento de sistemas web, aplicativos e automações sob medida para empresas de todo o Brasil.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://wa.me/5598999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-500/10 text-navy-500 transition-all duration-500 ease-out hover:bg-navy-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/ilhacodesoftwarehouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-500/10 text-navy-500 transition-all duration-500 ease-out hover:bg-navy-500 hover:text-white"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:contato@ilhacode.com.br"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-500/10 text-navy-500 transition-all duration-500 ease-out hover:bg-navy-500 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-navy-500">Mapa</h3>
            <ul className="mt-4 space-y-3">
              {mapLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-ink-light transition-colors hover:text-navy-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-navy-500">Contato</h3>
            <ul className="mt-4 space-y-3">
              <li className="font-sans text-sm text-ink-light">
                <a href="https://wa.me/5598999999999" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-navy-500">
                  WhatsApp
                </a>
              </li>
              <li className="font-sans text-sm text-ink-light">
                <a href="https://instagram.com/ilhacodesoftwarehouse" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-navy-500">
                  Instagram
                </a>
              </li>
              <li className="font-sans text-sm text-ink-light">
                <a href="mailto:contato@ilhacode.com.br" className="transition-colors hover:text-navy-500">
                  contato@ilhacode.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 font-sans text-sm text-ink-light">
                <MapPin className="h-4 w-4 text-navy-500" aria-hidden="true" />
                São Luís, Maranhão
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-500/10 pt-8">
          <p className="text-center font-sans text-xs text-ink-lighter">
            &copy; {new Date().getFullYear()} Ilha Code. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

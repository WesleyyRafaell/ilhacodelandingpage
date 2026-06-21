import { useScrollReveal } from '../hooks/useScrollReveal'

export function Footer() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <footer className="border-t border-navy-500/10 bg-cream">
      <div ref={ref} className={`container-section mx-auto py-16 reveal ${isVisible ? 'visible' : ''}`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-navy-500">
                Ilha Code
              </span>
            </a>
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-ink-light">
              Software house maranhense especializada em desenvolvimento de sistemas
              web, aplicativos e automações sob medida para empresas de todo o Brasil.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://wa.me/5598999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-500/10 text-navy-500 transition-all hover:bg-navy-500 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/ilhacodesoftwarehouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-500/10 text-navy-500 transition-all hover:bg-navy-500 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:contato@ilhacode.com.br"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy-500/10 text-navy-500 transition-all hover:bg-navy-500 hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-navy-500">Mapa</h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'Serviços', href: '#servicos' },
                { label: 'Processos', href: '#processos' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
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
              <li className="font-sans text-sm text-ink-light">
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

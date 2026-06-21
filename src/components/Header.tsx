import { useState } from 'react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processos', href: '#processos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-navy-500/10 bg-cream/90 backdrop-blur-md">
      <div className="container-section mx-auto flex h-18 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <span className="font-heading text-xl font-bold tracking-tight text-navy-500">
            Ilha <span className='text-gold-500'>Code</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-light transition-colors hover:text-navy-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-600 hover:shadow-md"
          >
            Solicitar orçamento
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Abrir menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 rounded bg-navy-500 transition-all ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-navy-500 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-navy-500 transition-all ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-40 flex animate-slide-down flex-col items-center justify-center gap-8 bg-cream/98 backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading text-3xl font-medium text-navy-500 transition-colors hover:text-gold-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5598999999999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-full bg-navy-500 px-8 py-3 font-semibold text-white shadow-lg"
            >
              Solicitar orçamento
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

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

      </div>

      {isOpen && (
        <div className="fixed w-screen h-screen inset-0 z-60 flex flex-col items-center justify-center gap-8 bg-white md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-lg text-navy-500/50 hover:text-navy-500"
            aria-label="Fechar menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" /><path d="M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-3xl font-semibold text-navy-500 transition-colors hover:text-gold-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598999999999"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-navy-500 px-10 py-3.5 font-semibold text-white shadow-lg"
          >
            Solicitar orçamento
          </a>
        </div>
        )}
    </header>
  )
}

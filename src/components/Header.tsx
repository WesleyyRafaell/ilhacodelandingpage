import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processos', href: '#processos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="container-section mx-auto flex h-18 items-center justify-between rounded-2xl border border-navy-500/10 bg-white shadow-xl shadow-navy-500/8 backdrop-blur-md">
        <a href="/" className="flex items-center gap-2.5" aria-label="Ilha Code">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl">
            <img src="/logo.png" alt="logo Ilha Code" />
          </span>
          <span className="font-heading text-xl font-bold tracking-tight text-navy-500">
            Ilha <span className="text-gold-500">Code</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-transparent py-1 text-sm font-semibold text-ink-light transition-colors hover:border-gold-500 hover:text-navy-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5598989101285?text=Ol%C3%A1!%20Tudo%20bem?%20Conheci%20o%20trabalho%20de%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo%20sobre%20um%20projeto%20que%20tenho%20em%20mente.%20Podemos%20conversar?%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-navy-500/15 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-xl hover:shadow-navy-500/20"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-navy-500/10 text-navy-500 md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-cream-light md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-navy-500/10 text-navy-500/60 hover:text-navy-500"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
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
            href="https://wa.me/5598989101285?text=Ol%C3%A1!%20Tudo%20bem?%20Conheci%20o%20trabalho%20de%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo%20sobre%20um%20projeto%20que%20tenho%20em%20mente.%20Podemos%20conversar?%0A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-xl bg-navy-500 px-10 py-3.5 font-semibold text-white shadow-lg"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  )
}

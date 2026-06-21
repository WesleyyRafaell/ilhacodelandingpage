export function Hero() {
  return (
    <section className="relative overflow-hidden pt-30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-navy-500/3 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      <div className="container-section mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-500/15 bg-navy-500/5 px-4 py-1.5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-navy-500">
                Software House Maranhense
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-navy-500 sm:text-5xl lg:text-6xl">
              Desenvolvimento inteligente para{' '}
              <span className="text-gold-500">transformar seu negocio</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-light sm:text-lg">
              Desenvolvemos plataformas web e mobile, integrações, automações, dashboards inteligentes e evolução de sistemas existentes para acelerar resultados e gerar valor para sua empresa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5598999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-500 px-7 py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-navy-500/20 transition-all hover:bg-navy-600 hover:shadow-xl hover:shadow-navy-500/30"
              >
                Solicitar orçamento
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-500/20 bg-white/60 px-7 py-3.5 font-sans text-sm font-semibold text-navy-500 backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
              >
                Ver soluções
              </a>
            </div>
          </div>

          <div className="animate-fade-in relative flex justify-center [animation-delay:0.2s]">
            <div className="relative w-full max-w-lg">
              <div className="overflow-hidden rounded-2xl border border-navy-500/10 bg-white shadow-2xl shadow-navy-500/10">
                <div className="flex items-center gap-1.5 border-b border-navy-500/5 bg-navy-500 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="ml-2 font-sans text-xs font-medium text-white/60">
                    ilhacode.com.br
                  </span>
                </div>
                <div className="h-80">
                  <img src="/bgprimary.webp" alt="Demonstração de interface de sistema web" width={840} height={560} fetchPriority="high" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="-top-3 -right-3 absolute hidden animate-float rounded-xl border border-navy-500/10 bg-white p-4 shadow-lg md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/10">
                    <svg className="h-4 w-4 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-ink">+50 projetos</p>
                    <p className="font-sans text-xs text-ink-light">entregues</p>
                  </div>
                </div>
              </div>

              <div className="-bottom-3 -left-3 absolute hidden animate-float rounded-xl border border-navy-500/10 bg-white p-4 shadow-lg md:block" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-ink">100% sob medida</p>
                    <p className="font-sans text-xs text-ink-light">cada projeto é único</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

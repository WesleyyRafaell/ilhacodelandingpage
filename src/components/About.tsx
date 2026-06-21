export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-28">
      <div className="container-section mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-navy-500/10 bg-white shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-500/5 via-cream to-gold-500/5">
                <div className="flex h-full flex-col items-center justify-center rounded-xl border border-navy-500/5 bg-cream/80">
                  <img src="/public/azulejos.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gold-500">
              Nossa história
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-navy-500 sm:text-4xl lg:text-5xl">
              Nascemos na ilha.<br />
              <span className="text-gold-500">Atendemos o Brasil.</span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-ink-light">
              A Ilha Code nasceu em São Luís do Maranhão, mas atende empresas de
              todo o país. Unimos tecnologia moderna com atendimento humano e
              próximo.
            </p>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink-light">
              Somos uma equipe enxuta, especializada e obcecada por qualidade. Cada
              projeto é tratado como único, com a dedicação que um produto feito sob
              medida merece.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '50+', label: 'Projetos entregues' },
                { value: '100%', label: 'Sob medida' },
                { value: 'SLZ', label: 'Made in São Luís' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-navy-500/8 bg-white/60 p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-navy-500">{stat.value}</p>
                  <p className="mt-0.5 font-sans text-xs text-ink-lighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, CheckCircle2, Code2, Sparkles, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-24 lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[560px] w-[560px] translate-x-1/3 -translate-y-1/3 rounded-full bg-navy-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold-500/8 blur-[110px]" />
      </div>

      <div className="container-section mx-auto">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-navy-500/15 bg-white/60 px-4 py-2 shadow-sm shadow-navy-500/5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-navy-500">
                Software House Maranhense
              </span>
            </div>

            <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-navy-500 sm:text-5xl lg:text-6xl">
              Tecnologia sob medida para{' '}
              <span className="rounded-xl bg-gold-500 px-2 text-navy-500">transformar seu negócio</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-light sm:text-lg">
              Desenvolvemos plataformas web e mobile, integrações, automações, dashboards inteligentes e evolução de sistemas existentes para acelerar resultados e gerar valor para sua empresa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5598989101285?text=Ol%C3%A1!%20Tudo%20bem?%20Conheci%20o%20trabalho%20de%20voc%C3%AAs%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo%20sobre%20um%20projeto%20que%20tenho%20em%20mente.%20Podemos%20conversar?%0A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-500 px-7 py-4 font-sans text-sm font-bold text-white shadow-lg shadow-navy-500/20 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-xl hover:shadow-navy-500/30"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-500/20 bg-white/70 px-7 py-4 font-sans text-sm font-bold text-navy-500 backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Ver soluções
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ['50+', 'projetos'],
                ['100%', 'sob medida'],
                ['SLZ', 'base local'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-navy-500/10 bg-white/55 p-4">
                  <p className="font-heading text-2xl font-bold text-navy-500">{value}</p>
                  <p className="mt-1 text-xs font-medium text-ink-light">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in relative flex justify-center [animation-delay:0.2s]">
            <div className="relative w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-500/10 bg-white shadow-2xl shadow-navy-500/15">
                <div className="flex items-center gap-1.5 border-b border-navy-500/5 bg-navy-500 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="ml-2 font-sans text-xs font-medium text-white/60">
                    ilhacode.com.br
                  </span>
                </div>
                <div className="h-80 sm:h-[390px]">
                  <img src="/bgprimary.webp" alt="Demonstração de interface de sistema web" width={840} height={560} fetchPriority="high" className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="absolute -right-3 -top-4 hidden animate-float rounded-2xl border border-navy-500/10 bg-cream-light p-4 shadow-xl shadow-navy-500/10 md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600">
                    <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-ink">+50 projetos</p>
                    <p className="font-sans text-xs text-ink-light">entregues</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 hidden animate-float rounded-2xl border border-navy-500/10 bg-cream-light p-4 shadow-xl shadow-navy-500/10 md:block" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-500/10 text-navy-500">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold text-ink">100% sob medida</p>
                    <p className="font-sans text-xs text-ink-light">cada projeto é único</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-5 hidden max-w-[210px] rounded-2xl border border-white/20 bg-navy-500 p-4 text-white shadow-2xl shadow-navy-500/20 lg:block">
                <div className="mb-3 flex items-center gap-2 text-gold-500">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">Entrega premium</span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">
                  Estratégia, design e código trabalhando no mesmo produto.
                </p>
              </div>

              <div className="absolute left-8 top-8 hidden rounded-2xl bg-gold-500 p-3 text-navy-500 shadow-xl shadow-gold-500/20 lg:block">
                <Code2 className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

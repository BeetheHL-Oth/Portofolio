type PaneCard = {
  title: string
  description: string
  tag: string
  skills?: string[]
  techStacks?: string[]
  imageUrl?: string
  status?: 'online' | 'offline'
  githubUrl?: string
  demoUrl?: string
}

type PaneProps = {
  id: string
  eyebrow: string
  title: string
  description: string
  cards: PaneCard[]
  sectionHint: string
}

function GlassPane({ id, eyebrow, cards, sectionHint }: PaneProps) {
  return (
    <section id={id} className="relative h-[calc(100svh-8rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150 sm:h-[calc(100vh-12rem)]">
      <div className="relative flex h-full flex-col gap-2.5 p-2.5 sm:gap-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.14em] text-white/75 sm:text-sm sm:tracking-[0.3em]">
          <span>{eyebrow}</span>
          <span className="text-right text-white/75">{sectionHint}</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="project-scroll flex h-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-3 pr-1 sm:gap-4 sm:pl-6 sm:pr-6">
            {cards.map((card) => {
              const isOffline = card.status === 'offline' || card.tag.trim().toLowerCase() === 'offline'
              return (
              <article key={card.title} className="project-card h-full snap-start overflow-hidden rounded-3xl border border-white/16 bg-[#2e2e2e] shadow-[0_12px_28px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="flex h-full flex-col gap-2 sm:gap-3">
                  <div className="project-card__media h-28 overflow-hidden border-b border-white/10 sm:h-32 lg:h-36">
                    {card.imageUrl ? (
                      <img src={card.imageUrl} alt={`${card.title} preview`} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[0.62rem] uppercase tracking-[0.18em] text-white/55">
                        No Preview
                      </div>
                    )}
                  </div>

                  {card.techStacks?.length ? (
                    <div className="project-card__tech flex flex-wrap gap-1 border-b border-white/10 pl-4 pr-3 py-1.5 sm:pl-6 sm:pr-5 sm:py-2.5 lg:pl-7 lg:pr-6">
                      {card.techStacks.map((tech) => (
                        <span key={tech} className="inline-flex rounded-full border border-white/10 bg-white/10 px-1 py-0.25 text-[0.38rem] font-semibold uppercase tracking-[0.04em] text-[#ecdba2] sm:px-2 sm:py-0.5 sm:text-[0.58rem] sm:tracking-[0.1em]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="project-card__body flex min-w-0 flex-1 flex-col p-3 pt-2 sm:p-5 sm:pt-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="min-w-0 text-[0.82rem] font-semibold leading-tight text-white sm:text-lg lg:text-xl">{card.title}</h3>
                      <span
                        className={`inline-flex shrink-0 rounded-full border px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.1em] sm:px-2.5 sm:py-1 sm:text-[0.62rem] sm:tracking-[0.14em] ${
                          card.status === 'online'
                            ? 'border-emerald-300/35 bg-emerald-400/15 text-emerald-200'
                            : 'border-amber-300/35 bg-amber-400/15 text-amber-200'
                        }`}
                      >
                        {card.status === 'online' ? 'Live' : 'Offline'}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-1.5 py-0.25 text-[0.45rem] font-semibold uppercase tracking-[0.06em] text-white/75 backdrop-blur-2xl sm:text-[0.58rem] sm:tracking-[0.1em]">
                        {card.tag}
                      </span>
                    </div>

                    <p className="mt-2 text-[0.64rem] leading-4 text-neutral-300 sm:text-sm sm:leading-6">{card.description}</p>

                    <div className="mt-auto flex flex-wrap justify-end gap-2 pt-3">
                      {card.githubUrl ? (
                        <a
                          href={card.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-black/50 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]"
                        >
                          Github
                        </a>
                      ) : null}
                      {card.demoUrl ? (
                        isOffline ? (
                          <button
                            type="button"
                            disabled
                            aria-disabled="true"
                            className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-[#ecdba2]/45 px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-neutral-900/70 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]"
                          >
                            Demo
                          </button>
                        ) : (
                          <a
                            href={card.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-[#ecdba2] px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-neutral-950 transition-colors hover:bg-[#ecdba2]/85 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.12em]"
                          >
                            Demo
                          </a>
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
              )
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-gradient-to-r from-black/25 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 bg-gradient-to-l from-black/35 to-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}

export type { PaneCard, PaneProps }
export default GlassPane

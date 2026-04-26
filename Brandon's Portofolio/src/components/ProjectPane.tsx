type PaneCard = {
  title: string
  description: string
  tag: string
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

function GlassPane({ id, eyebrow, title, cards, sectionHint }: PaneProps) {
  return (
    <section id={id} className="relative h-[calc(100vh-12rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="relative flex h-full flex-col gap-4 p-4 sm:gap-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/75 sm:text-sm sm:tracking-[0.3em]">
          <span>{eyebrow}</span>
          <span className="text-right text-white/75">{sectionHint}</span>
        </div>

        <div className="rounded-3xl border border-white/22 bg-[#ecdba2]/70 p-4 shadow-2xl backdrop-blur-xl sm:rounded-4xl sm:p-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-3xl">{title}</h2>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="flex h-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-3 pr-2 sm:gap-4 sm:pl-6 sm:pr-6">
            {cards.map((card) => (
              <article key={card.title} className="h-full min-w-[18rem] snap-start rounded-2xl border border-white/16 bg-[#2e2e2e] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] sm:min-w-[22rem] sm:p-5 lg:min-w-[26rem]">
                <div className="h-28 w-full overflow-hidden rounded-xl border border-white/10 bg-[#252525] sm:h-32 lg:h-36">
                  {card.imageUrl ? (
                    <img src={card.imageUrl} alt={`${card.title} preview`} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.22em] text-white/55">
                      No Preview
                    </div>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-2xl sm:text-xs">
                    {card.tag}
                  </span>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs ${
                      card.status === 'online'
                        ? 'border-emerald-300/35 bg-emerald-400/15 text-emerald-200'
                        : 'border-amber-300/35 bg-amber-400/15 text-amber-200'
                    }`}
                  >
                    {card.status ?? 'offline'}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white sm:text-xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-300">{card.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {card.githubUrl ? (
                    <a
                      href={card.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-black/50"
                    >
                      Github
                    </a>
                  ) : null}
                  {card.demoUrl ? (
                    <a
                      href={card.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#ecdba2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-950 transition-colors hover:bg-[#ecdba2]/85"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
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

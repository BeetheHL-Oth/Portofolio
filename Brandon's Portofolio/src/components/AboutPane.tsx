import type { PaneCard } from './ProjectPane'

type ShowcasePaneProps = {
  id: string
  title: string
  description: string
  cards: PaneCard[]
  sectionLabel: string
  sectionHint: string
}

function ShowcasePane({ id, title, cards, sectionLabel, sectionHint }: ShowcasePaneProps) {
  const [featured, ...rest] = cards

  return (
    <section id={id} className="relative h-[calc(100svh-8rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150 sm:h-[calc(100vh-12rem)]">
      <div className="relative flex h-full flex-col gap-3 p-3 sm:gap-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.14em] text-white/75 sm:text-sm sm:tracking-[0.3em]">
          <span>{sectionLabel}</span>
          <span className="text-white/75">{sectionHint}</span>
        </div>

        <div className="flex flex-col gap-2.5 lg:flex-1 lg:flex-row lg:gap-4">
          <div className="hidden rounded-3xl border border-white/22 bg-[#ecdba2]/70 p-4 shadow-2xl backdrop-blur-xl lg:flex lg:w-88 lg:shrink-0 lg:flex-col lg:justify-between sm:rounded-4xl sm:p-8">
            <h2 className="text-base font-bold tracking-tight text-black sm:text-2xl lg:text-4xl">{title}</h2>
            <div>
              <img src="" alt="image here" className="hidden lg:block" />
            </div>
          </div>

          <div className="grid gap-2.5 auto-rows-min lg:flex-1 lg:grid-cols-3 lg:gap-4">
            {featured && (
              <article className="rounded-[1.75rem] border border-white/16 bg-[#2e2e2e] p-3 shadow-[0_12px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6 lg:col-span-2">
                <h3 className="mt-1 text-[0.9rem] font-semibold text-white sm:mt-4 sm:text-3xl">{featured.title}</h3>
                <p className="mt-1 max-w-2xl text-[0.66rem] leading-4 text-neutral-200 sm:mt-3 sm:text-base sm:leading-7">{featured.description}</p>
              </article>
            )}

            <div className="grid gap-2.5">
              {rest.map((card) => (
                <article key={card.title} className="rounded-3xl border border-white/16 bg-[#252525] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-5">
                  <h4 className="mt-1 text-[0.75rem] font-semibold text-white sm:mt-3 sm:text-xl">{card.title}</h4>
                  {card.skills?.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {card.skills.map((skill) => (
                        <span key={skill} className="inline-flex rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[#ecdba2] sm:px-3 sm:py-1 sm:text-xs sm:tracking-[0.2em]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-1 text-[0.64rem] leading-4 text-neutral-300 sm:text-sm sm:leading-6">{card.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcasePane

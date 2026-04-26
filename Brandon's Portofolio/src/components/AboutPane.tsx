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
    <section id={id} className="relative h-[calc(100vh-12rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="relative flex h-full flex-col gap-4 p-4 sm:gap-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/75 sm:text-sm sm:tracking-[0.3em]">
          <span>{sectionLabel}</span>
          <span className="text-white/75">{sectionHint}</span>
        </div>

        <div className="flex flex-1 flex-col gap-4 lg:flex-row">
          <div className="rounded-3xl border border-white/22 bg-[#ecdba2]/70 p-4 shadow-2xl backdrop-blur-xl sm:rounded-4xl sm:p-8 lg:w-88 lg:shrink-0">
            <h2 className="text-lg font-bold tracking-tight text-black sm:text-2xl lg:text-4xl">{title}</h2>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-3">
            {featured && (
              <article className="rounded-[1.75rem] border border-white/16 bg-[#474747] p-4 shadow-[0_12px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.15)] sm:p-6 lg:col-span-2">
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur-2xl sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                  {featured.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-3xl">{featured.title}</h3>
                <p className="mt-2 max-w-2xl text-xs leading-5 text-neutral-200 sm:mt-3 sm:text-base sm:leading-7">{featured.description}</p>
              </article>
            )}

            <div className="grid gap-4">
              {rest.map((card) => (
                <article key={card.title} className="rounded-3xl border border-white/16 bg-[#3f3f3f] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-5">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                    {card.tag}
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-white sm:text-xl">{card.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">{card.description}</p>
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

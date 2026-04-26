import type { PaneCard } from './ProjectPane'

type ContactPaneProps = {
  id: string
  title: string
  description: string
  cards: PaneCard[]
}

function ContactPane({ id, title, description, cards }: ContactPaneProps) {
  return (
    <section id={id} className="relative h-[calc(100vh-12rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="relative flex h-full flex-col gap-4 p-4 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60 sm:text-sm sm:tracking-[0.3em]">
          <h2 className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/75 sm:text-sm sm:tracking-[0.3em]">{title}</h2>
          <span className="text-white/75">Let&apos;s Connect</span>
        </div>

        <div className="min-h-0 flex-1 w-full overflow-y-auto rounded-3xl border border-white/14 bg-[#3f3f3f] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.34)] sm:overflow-y-visible sm:p-8">
          <p className="max-w-3xl text-sm leading-6 text-neutral-200 sm:text-base sm:leading-7">{description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-white/12 bg-[#474747] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.28)] sm:p-5">
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  {card.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-xl">{card.title}</h3>
                <p className="mt-2 wrap-break-word text-sm leading-6 text-neutral-300">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPane

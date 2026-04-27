import type { PaneCard } from './ProjectPane'

type ContactPaneProps = {
  id: string
  title: string
  description: string
  cards: PaneCard[]
}

function ContactPane({ id, title, description: _description, cards }: ContactPaneProps) {
  return (
    <section id={id} className="relative h-[calc(100svh-8rem)] w-full overflow-hidden rounded-xl border border-white/20 bg-white/11 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150 sm:h-[calc(100vh-12rem)]">
      <div className="contact-shell relative flex h-full flex-col gap-3 p-3 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.14em] text-white/60 sm:text-sm sm:tracking-[0.3em]">
          <h2 className="text-[0.62rem] font-normal uppercase tracking-[0.14em] text-white/75 sm:text-sm sm:tracking-[0.3em]">{title}</h2>
          <span className="text-white/75">Let&apos;s Connect</span>
        </div>

        <div className="contact-panel min-h-0 flex-1 w-full overflow-y-auto rounded-3xl border border-white/14 bg-[#2a2a2a] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.34)] sm:overflow-y-visible sm:p-8">
          {/* <p className="max-w-3xl text-[0.75rem] leading-5 text-neutral-200 sm:text-base sm:leading-7">{description}</p> */}

          <div className="contact-grid mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            {cards.map((card) => (
              card.href ? (
                <a
                  key={card.title || card.tag}
                  href={card.href}
                  target={card.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={card.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={card.linkLabel ?? `${card.tag}: ${card.description}`}
                  className="group block rounded-2xl border border-white/12 bg-[#252525] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ecdba2]/40 hover:bg-[#2b2b2b] hover:shadow-[0_16px_30px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ecdba2]/70 sm:p-5"
                >
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#ecdba2] sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                    {card.tag}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-white transition-colors group-hover:text-[#ecdba2] sm:mt-4 sm:text-xl">{card.title}</h3>
                  <p className="mt-2 wrap-break-word text-[0.72rem] leading-5 text-neutral-300 sm:text-sm sm:leading-6">{card.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#ecdba2] sm:text-xs sm:tracking-[0.22em]">
                    Open link
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
                  </span>
                </a>
              ) : (
                <article key={card.title || card.tag} className="rounded-2xl border border-white/12 bg-[#252525] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.28)] sm:p-5">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#ecdba2] sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                    {card.tag}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-white sm:mt-4 sm:text-xl">{card.title}</h3>
                  <p className="mt-2 wrap-break-word text-[0.72rem] leading-5 text-neutral-300 sm:text-sm sm:leading-6">{card.description}</p>
                </article>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPane

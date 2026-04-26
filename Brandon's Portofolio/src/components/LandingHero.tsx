import heroImage from '../assets/hero.webp'

type LandingHeroProps = {
  onJump: (offset: number) => void
}

function LandingHero({ onJump }: LandingHeroProps) {
  return (
    <section id="hero" className="flex min-h-[calc(100svh-8rem)] w-full items-center justify-center py-6 sm:min-h-[calc(100vh-12rem)] sm:py-0">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 sm:max-w-2xl sm:gap-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-sm sm:tracking-[0.35em]">
          Fullstack Developer
        </p>
        <div className="h-24 w-24 overflow-hidden rounded-full border border-white/20 bg-white/8 backdrop-blur-xl backdrop-saturate-150 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56">
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.25em] text-white/60">
            <img className="h-full w-full object-cover" src={heroImage} alt="Profile Image" />
          </div>
        </div>
        <h1 className="text-center text-2xl font-semibold tracking-[0.04em] text-[#ecdba2] sm:text-4xl md:text-5xl">
          Brandon Lawanto
        </h1>
        <h2 className="text-xs text-white/75 sm:text-sm">Based in Jakarta, Indonesia</h2>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onJump(3.15)}
            className="inline-flex items-center justify-center rounded-full bg-[#ecdba2] px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors duration-200 hover:bg-[#ecdba2]/80 backdrop-blur-xl sm:px-6 sm:py-3"
          >
            Contact Me
          </button>
        </div>
        <div className="w-full rounded-3xl border border-white/12 bg-white/[0.07] p-4 text-center backdrop-blur-2xl backdrop-saturate-150 sm:p-6">
          <p className="text-sm leading-6 text-neutral-200 sm:text-base sm:leading-7">
            Building applications with a focus on efficiency, scalability, and user experience. I am dedicated to crafting solutions that can help with problems in the real world, and I am always eager to learn new skills and grow as a developer.
          </p>
        </div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-xs sm:tracking-[0.22em]">
          V -- Scroll down to see more -- v
        </p>
      </div>
    </section>
  )
}

export default LandingHero

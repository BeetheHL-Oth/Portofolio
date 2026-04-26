type LandingHeroProps = {
  onJump: (offset: number) => void
}

function LandingHero({ onJump }: LandingHeroProps) {
  return (
    <section id="hero" className="flex h-[calc(100vh-12rem)] w-full items-center justify-center">
      <div className="flex w-full max-w-2xl flex-col items-center gap-5">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/65 sm:text-base">
          Fullstack Developer
        </p>
        <div className="h-40 w-40 overflow-hidden rounded-full border border-white/20 bg-white/8 backdrop-blur-xl backdrop-saturate-150 sm:h-56 sm:w-56">
          <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.25em] text-white/60">
            <img className="h-full w-full object-cover" src="../src/assets/hero.png" alt="Profile Image" />
          </div>
        </div>
        <h1 className="text-center text-4xl font-semibold tracking-[0.06em] text-[#ecdba2] sm:text-5xl">
          Brandon Lawanto
        </h1>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onJump(3.15)}
            className="inline-flex items-center justify-center rounded-full bg-[#ecdba2] px-6 py-3 font-semibold text-neutral-950 transition-colors duration-200 hover:bg-[#ecdba2]/80 backdrop-blur-xl"
          >
            Contact Me
          </button>
        </div>
        <div className="w-full rounded-3xl border border-white/12 bg-white/[0.07] p-5 text-center backdrop-blur-2xl backdrop-saturate-150 sm:p-6">
          <p className="text-base leading-7 text-neutral-200 sm:text-lg">
            I am a fullstack developer that loves to create solutions to real world problems. With my experiences in developing and designing various projects building web-based applications, I am confident in my ability to contribute to any team and any project. I love learning new skills and technologies and I am always looking for new opportunities and challenges to help me grow as a developer and as a person.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
          V -- Scroll down to see more -- v
        </p>
      </div>
    </section>
  )
}

export default LandingHero

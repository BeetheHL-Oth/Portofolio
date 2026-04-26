type AppHeaderProps = {
  headerCenterOffset: number
  onJump: (offset: number) => void
}

function AppHeader({ headerCenterOffset, onJump }: AppHeaderProps) {
  return (
    <header
      className="fixed left-1/2 top-3 z-50 w-[min(100%-1rem,80rem)] rounded-t-full border border-white/20 bg-white/[0.14] px-4 py-2 shadow-[0_20px_56px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150 sm:top-4 sm:w-[min(100%-2rem,80rem)] sm:px-8 sm:py-3 lg:px-12"
      style={{ transform: `translateX(calc(-50% - ${headerCenterOffset}px))` }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="cursor-pointer text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#ecdba2] sm:text-xs sm:tracking-[0.3em] lg:text-sm lg:tracking-[0.35em]" onClick={() => onJump(0)}>
            Brandon Lawanto
          </span>
        </div>
        <nav className="hidden items-center gap-4 text-xs text-white/70 md:flex lg:gap-6 lg:text-sm">
          <button type="button" onClick={() => onJump(0)} className="transition-colors hover:text-[#ecdba2]">Portofolio</button>
          <button type="button" onClick={() => onJump(0.88)} className="transition-colors hover:text-[#ecdba2]">About</button>
          <button type="button" onClick={() => onJump(2.0)} className="transition-colors hover:text-[#ecdba2]">Projects</button>
          <button type="button" onClick={() => onJump(3.15)} className="transition-colors hover:text-[#ecdba2]">Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader

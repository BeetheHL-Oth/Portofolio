type AppHeaderProps = {
  headerCenterOffset: number
  onJump: (offset: number) => void
}

function AppHeader({ headerCenterOffset, onJump }: AppHeaderProps) {
  return (
    <header
      className="fixed left-1/2 top-4 z-50 w-[min(100%-2rem,80rem)] rounded-t-full border border-white/20 bg-white/[0.14] px-12 py-3 shadow-[0_20px_56px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150"
      style={{ transform: `translateX(calc(-50% - ${headerCenterOffset}px))` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ecdba2]">Brandon Lawanto</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <button type="button" onClick={() => onJump(0)} className="transition-colors hover:text-[#ecdba2]">Home</button>
          <button type="button" onClick={() => onJump(0.88)} className="transition-colors hover:text-[#ecdba2]">About</button>
          <button type="button" onClick={() => onJump(2.0)} className="transition-colors hover:text-[#ecdba2]">Projects</button>
          <button type="button" onClick={() => onJump(3.15)} className="transition-colors hover:text-[#ecdba2]">Contact</button>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader

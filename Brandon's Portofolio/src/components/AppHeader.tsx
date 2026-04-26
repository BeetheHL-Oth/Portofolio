import { useEffect, useMemo, useState } from 'react'

type AppHeaderProps = {
  headerCenterOffset: number
  onJump: (offset: number) => void
}

function AppHeader({ headerCenterOffset, onJump }: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMobileLink, setActiveMobileLink] = useState('Portofolio')
  const navLinks = useMemo(
    () => [
      { label: 'Portofolio', offset: 0 },
      { label: 'About', offset: 0.88 },
      { label: 'Projects', offset: 2.0 },
      { label: 'Contact', offset: 3.15 },
    ],
    [],
  )

  useEffect(() => {
    const query = window.matchMedia('(orientation: portrait) and (max-width: 899px)')
    const syncMenuState = () => {
      if (!query.matches) {
        setIsMenuOpen(false)
      }
    }

    syncMenuState()
    query.addEventListener('change', syncMenuState)
    return () => query.removeEventListener('change', syncMenuState)
  }, [])

  return (
    <header
      className="fixed left-1/2 top-3 z-50 w-[min(100%-1rem,80rem)] rounded-t-full border border-white/20 bg-white/[0.14] px-4 py-2 shadow-[0_20px_56px_rgba(0,0,0,0.32)] backdrop-blur-2xl backdrop-saturate-150 sm:top-4 sm:w-[min(100%-2rem,80rem)] sm:px-8 sm:py-3 lg:px-12"
      style={{ transform: `translateX(calc(-50% - ${headerCenterOffset}px))` }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
          <span
            className="cursor-pointer text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#ecdba2] sm:text-xs sm:tracking-[0.3em] lg:text-sm lg:tracking-[0.35em]"
            onClick={() => {
              onJump(0)
              setActiveMobileLink('Portofolio')
            }}
          >
            Brandon Lawanto
          </span>
        </div>
        <nav className="hidden items-center gap-4 text-xs text-white/70 md:flex lg:gap-6 lg:text-sm">
          {navLinks.map((link) => (
            <button key={link.label} type="button" onClick={() => onJump(link.offset)} className="transition-colors hover:text-[#ecdba2]">
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="header-mobile-trigger hidden h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/25 text-[#ecdba2] transition-colors hover:bg-black/35"
        >
          <span className="sr-only">Menu</span>
          <span className="relative h-3.5 w-4">
            <span className={`absolute left-0 top-0 block h-0.5 w-full rounded bg-current transition-transform duration-200 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-full rounded bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-3 block h-0.5 w-full rounded bg-current transition-transform duration-200 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <nav
        className={`header-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="header-mobile-menu-shell">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => {
                onJump(link.offset)
                setActiveMobileLink(link.label)
                setIsMenuOpen(false)
              }}
              className={`w-full rounded-2xl border border-white/14 bg-black/22 px-3 py-2 text-left text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-black/35 hover:text-[#ecdba2] ${
                activeMobileLink === link.label ? 'text-[#ecdba2]' : 'text-white/80'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default AppHeader

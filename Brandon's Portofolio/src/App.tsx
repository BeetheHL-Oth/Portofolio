import { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax'
import { animated, to, useSpring } from '@react-spring/web'
import AppHeader from './components/AppHeader'
import GlassPane, { type PaneCard } from './components/ProjectPane'
import LandingHero from './components/LandingHero'
import ContactPane from './components/ContactPane'
import ShowcasePane from './components/AboutPane'
import './App.css'

const aboutCards: PaneCard[] = [
  { title: 'Background', description: 'Lorem Ipsum Dolor blablabla', tag: 'Window 01' },
  { title: 'Experiences', description: 'This layer lands over the previous one with a soft blur.', tag: 'Window 02' },
  { title: 'IDK', description: 'Big pane first, smaller containers second.', tag: 'Window 03' },
]

const projectCards: PaneCard[] = [
  {
    title: 'PendengarMu',
    description: 'Mental health companion app with journaling and mood tracking.',
    tag: 'Health',
    imageUrl: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?auto=format&fit=crop&w=900&q=80',
    status: 'online',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/pendengarmu',
  },
  {
    title: 'Reverie Stories',
    description: 'Writing app focused on distraction-free drafting and story organization.',
    tag: 'Writing',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    status: 'offline',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/reverie-stories',
  },
  {
    title: 'EasyPayCalc',
    description: 'Bill-splitting tool with shared expense balancing and quick settlement math.',
    tag: 'Calculation',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    status: 'online',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/easypaycalc',
  },
  {
    title: 'TaskFlow Board',
    description: 'Kanban-style project tracker with drag and drop and sprint summaries.',
    tag: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
    status: 'offline',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/taskflow-board',
  },
  {
    title: 'MarketPulse',
    description: 'Lightweight dashboard for tracking crypto and stock watchlists in one place.',
    tag: 'Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1642543348745-290bc9b7ce58?auto=format&fit=crop&w=900&q=80',
    status: 'online',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/marketpulse',
  },
  {
    title: 'StudySprint',
    description: 'Pomodoro-based planner for focused study sessions and progress streaks.',
    tag: 'Education',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
    status: 'offline',
    githubUrl: 'https://github.com/BeetheHL-Oth',
    demoUrl: 'https://example.com/studysprint',
  },
]

const contactCards: PaneCard[] = [
  { title: 'Email', description: 'Banansbby@gmail.com', tag: 'Email' },
  { title: 'Github', description: 'https://github.com/BeetheHL-Oth', tag: 'Github' },
  { title: 'Linked In', description: 'For my professional network', tag: 'Job Portal' },
  { title: 'Linked In', description: 'For my professional network', tag: 'Job Portal' },
  { title: 'Linked In', description: 'For my professional network', tag: 'Job Portal' },
  { title: 'Linked In', description: 'For my professional network', tag: 'Job Portal' },
]

function App() {
  const parallaxRef = useRef<IParallax | null>(null)
  const [headerCenterOffset, setHeaderCenterOffset] = useState(0)
  const [heroSpring, heroApi] = useSpring(() => ({
    y: 0,
    scale: 1,
    opacity: 1,
    config: { tension: 180, friction: 24 },
  }))

  useEffect(() => {
    const container = parallaxRef.current?.container?.current
    if (!container) return
    let rafId = 0

    const syncHeaderCenter = () => {
      const scrollbarWidth = Math.max(0, container.offsetWidth - container.clientWidth)
      setHeaderCenterOffset(scrollbarWidth / 2)
    }

    const updateFromScroll = () => {
      const scrollTop = container.scrollTop ?? 0
      const viewportHeight = container.clientHeight || 1
      const raw = scrollTop / (viewportHeight * 0.58)
      const progress = Math.min(1, Math.max(0, raw))

      heroApi.start({
        y: -28 * progress,
        scale: 1 - 0.05 * progress,
        opacity: 1 - 0.35 * progress,
        immediate: true,
      })
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateFromScroll()
      })
    }

    syncHeaderCenter()
    updateFromScroll()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', syncHeaderCenter)
    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', syncHeaderCenter)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [heroApi])

  const jumpToLayer = (offset: number) => {
    parallaxRef.current?.scrollTo(offset)
  }

  return (
    <div className="min-h-screen bg-[#44203f] text-white">
      <AppHeader headerCenterOffset={headerCenterOffset} onJump={jumpToLayer} />

      <Parallax
        ref={parallaxRef}
        pages={4.2}
        style={{ background: '#44203f' }}
      >

        <ParallaxLayer sticky={{ start: 0, end: 3.9 }} style={{ zIndex: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6.5rem 1rem 0', willChange: 'transform' }}>
          <animated.div
            className="w-[min(100%-2rem,80rem)]"
            style={{
              transform: to([heroSpring.y, heroSpring.scale], (y, scale) => `translate3d(0, ${y}px, 0) scale(${scale})`),
              opacity: heroSpring.opacity,
            }}
          >
            <LandingHero />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.86, end: 3.9 }} style={{ zIndex: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6.5rem 1rem 0', willChange: 'transform' }}>
          <div className="w-[min(100%-2rem,80rem)]">
            <ShowcasePane
              id="about"
              title="My Skills and Background."
              description="blablablabeblbelbelbeleblebalbelae"
              cards={aboutCards}
              sectionLabel="About"
              sectionHint="Background"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.98, end: 3.9 }} style={{ zIndex: 30, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6.5rem 1rem 0', willChange: 'transform' }}>
          <div className="w-[min(100%-2rem,80rem)]">
            <GlassPane
              id="projects"
              eyebrow="Projects"
              title="A stacked project section."
              description="whoopty doo baba wewoooo"
              cards={projectCards}
              sectionHint="My Works"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 3.13, end: 3.9 }} style={{ zIndex: 40, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '6.5rem 1rem 1rem', willChange: 'transform' }}>
          <div className="w-[min(100%-2rem,80rem)]">
            <ContactPane
              id="contact"
              title="Contact Me"
              description="Some ways you can reach me:"
              cards={contactCards}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App

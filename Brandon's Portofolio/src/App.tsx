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
  { title: 'Information', description: 'I am a fullstack developer that loves to create solutions to real world problems. With my experiences in developing and designing various projects building web-based applications, I am confident in my ability to contribute to any team and any project. I love learning new skills and technologies and I am always looking for new opportunities and challenges to help me grow as a developer and as a person.', tag: 'Window 01' },
  { title: 'Skills', description: 'Core technologies I have mastered.', tag: 'Window 02', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Git'] },
  { title: 'Experiences', description: 'Coming from a background having done various events for different organizations, I am able to work well under pressure and in a team environment.', tag: 'Window 03' },
]

const projectCards: PaneCard[] = [
  {
    title: 'PendengarMu',
    description: 'Mental health application for booking appointments with psychologists. With the help of AI, the forms filled by users are analyzed to provide insights and recommendations for better mental well-being. The app also features tools for psychologists to manage their appointments and clients effectively.',
    tag: 'Health',
    techStacks: ['React', 'TypeScript', 'Tailwind', 'Google Oauth','Next.js', 'MongoDB', 'Gemini AI', 'Redis', 'Vercel', 'NextAuth'],
    imageUrl: 'src/assets/pendengarmu.webp',
    status: 'online',
    githubUrl: 'https://github.com/Final-Project-H8-FSJS-RMT-069-P3/pendengarMu',
    demoUrl: 'pendengarmu.vercel.app',
  },
  {
    title: 'Reverie Stories',
    description: 'Writing app focused on immersion and creativity. It features an AI roleplaying chatbot that can help users brainstorm and develop their stories, as well as a way to dive into the world they are creating. The app also includes Text To Speech for the chatbots so that the users are able to listen to the conversations and immerse themselves even more into the world they are building.',
    tag: 'Writing',
    techStacks: ['React', 'express', 'Vite', 'Groq', 'supabase', 'google oauth', 'vercel', 'redis', 'elevenlabs tts'],
    imageUrl: 'src/assets/reveriestories.webp',
    status: 'offline',
    githubUrl: 'https://github.com/BeetheHL-Oth/ReverieStories-client',
    demoUrl: 'reveriestories-client.vercel.app',
  },
  {
    title: 'EasyPayCalc',
    description: 'Bill-splitting tool with a focus on simplicity and ease of use. It allows users to split bills with friends and family, calculate including discounts taxes and service charges, including before and after tax, and provides also a way to toggle multiple instances of 1 item with different quantities and prices.',
    tag: 'Calculation',
    techStacks: ['HTML', 'JavaScript', 'CSS'],
    imageUrl: 'src/assets/easypaycalc.webp',
    status: 'online',
    githubUrl: 'https://github.com/watisdis31/Split-bill-calculator',
    demoUrl: 'easypaycalc.vercel.app',
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
    <div className="min-h-screen bg-[#271825] text-white">
      <AppHeader headerCenterOffset={headerCenterOffset} onJump={jumpToLayer} />

      <Parallax
        ref={parallaxRef}
        pages={4.2}
        style={{ background: '#271825' }}
      >

        <ParallaxLayer sticky={{ start: 0, end: 3.9 }} style={{ zIndex: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--layer-top-padding, 5.5rem) 0 0', willChange: 'transform' }}>
          <animated.div
            className="w-[min(100%-1rem,80rem)] sm:w-[min(100%-2rem,80rem)]"
            style={{
              transform: to([heroSpring.y, heroSpring.scale], (y, scale) => `translate3d(0, ${y}px, 0) scale(${scale})`),
              opacity: heroSpring.opacity,
            }}
          >
            <LandingHero onJump={jumpToLayer} />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.86, end: 3.9 }} style={{ zIndex: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--layer-top-padding, 5.5rem) 0 0', willChange: 'transform' }}>
          <div className="w-[min(100%-1rem,80rem)] sm:w-[min(100%-2rem,80rem)]">
            <ShowcasePane
              id="about"
              title="About Me"
              description="blablablabeblbelbelbeleblebalbelae"
              cards={aboutCards}
              sectionLabel="About"
              sectionHint="Background"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1.98, end: 3.9 }} style={{ zIndex: 30, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--layer-top-padding, 5.5rem) 0 0', willChange: 'transform' }}>
          <div className="w-[min(100%-1rem,80rem)] sm:w-[min(100%-2rem,80rem)]">
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

        <ParallaxLayer sticky={{ start: 3.13, end: 3.9 }} style={{ zIndex: 40, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--layer-top-padding, 5.5rem) 0 1rem', willChange: 'transform' }}>
          <div className="w-[min(100%-1rem,80rem)] sm:w-[min(100%-2rem,80rem)]">
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

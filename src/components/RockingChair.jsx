import { useEffect, useRef } from 'react'

export default function RockingChair() {
  const chairRef = useRef(null)

  useEffect(() => {
    let angle = 0
    let velocity = 0
    let lastScrollY = window.scrollY
    let animFrame

    const onScroll = () => {
      const delta = window.scrollY - lastScrollY
      velocity += delta * 0.04
      lastScrollY = window.scrollY
    }

    const animate = () => {
      // Spring physics — damps back to center
      const spring = -0.08 * angle
      const damping = -0.18 * velocity
      velocity += spring + damping
      angle += velocity

      // Clamp so it doesn't go wild
      angle = Math.max(-22, Math.min(22, angle))

      if (chairRef.current) {
        chairRef.current.style.transform = `rotate(${angle}deg)`
      }
      animFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '6vh',
      right: '5vw',
      zIndex: 0,
      pointerEvents: 'none',
      opacity: 0.12,
      transformOrigin: 'bottom center',
    }}>
      <svg
        ref={chairRef}
        width="260"
        height="280"
        viewBox="0 0 260 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transformOrigin: 'bottom center', display: 'block' }}
      >
        {/* Rocker curves at bottom */}
        <path d="M20 245 Q80 225 130 228 Q180 231 240 245" stroke="#b8860b" strokeWidth="5" fill="none" strokeLinecap="round"/>

        {/* Left leg */}
        <line x1="75" y1="200" x2="55" y2="244" stroke="#b8860b" strokeWidth="4" strokeLinecap="round"/>
        {/* Right leg */}
        <line x1="175" y1="200" x2="195" y2="244" stroke="#b8860b" strokeWidth="4" strokeLinecap="round"/>

        {/* Cross bar between legs */}
        <line x1="68" y1="222" x2="188" y2="222" stroke="#b8860b" strokeWidth="3" strokeLinecap="round"/>

        {/* Seat */}
        <path d="M65 195 Q130 205 195 195" stroke="#b8860b" strokeWidth="5" fill="none" strokeLinecap="round"/>
        <path d="M65 195 Q130 188 195 195" stroke="#b8860b" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 4"/>

        {/* Back left post */}
        <line x1="78" y1="193" x2="88" y2="80" stroke="#b8860b" strokeWidth="4" strokeLinecap="round"/>
        {/* Back right post */}
        <line x1="172" y1="193" x2="162" y2="80" stroke="#b8860b" strokeWidth="4" strokeLinecap="round"/>

        {/* Back slats */}
        {[100, 120, 140, 160].map((y, i) => (
          <line key={i}
            x1={88 + (y - 100) * 0.1}
            y1={y}
            x2={162 - (y - 100) * 0.1}
            y2={y}
            stroke="#b8860b" strokeWidth="3" strokeLinecap="round"
          />
        ))}

        {/* Top rail */}
        <path d="M88 80 Q125 68 162 80" stroke="#b8860b" strokeWidth="5" fill="none" strokeLinecap="round"/>

        {/* Left armrest */}
        <path d="M78 148 Q58 145 50 150" stroke="#b8860b" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <line x1="78" y1="148" x2="80" y2="193" stroke="#b8860b" strokeWidth="3" strokeLinecap="round"/>

        {/* Right armrest */}
        <path d="M172 148 Q192 145 200 150" stroke="#b8860b" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <line x1="172" y1="148" x2="170" y2="193" stroke="#b8860b" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  )
}
import idaPhoto from '../assets/ida-hero.png'

export default function Hero() {
  return (
    <section style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(150deg, #faf6ef 0%, #f5ead8 55%, #fdf0e8 100%)',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>

      {/* Gold diagonal accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        width: '1px', height: '100%',
        background: 'linear-gradient(to bottom, transparent 0%, #b8860b44 40%, #c4667a33 70%, transparent 100%)',
      }} />

      {/* Large watermark text */}
      <div style={{
        position: 'absolute', left: '-1vw', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(5rem, 14vw, 13rem)',
        fontWeight: 900,
        color: 'rgba(184,134,11,0.055)',
        lineHeight: 1, userSelect: 'none', whiteSpace: 'nowrap',
        pointerEvents: 'none', letterSpacing: '-0.02em'
      }}>
        GRANDDAD
      </div>

      {/* Two-column layout */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4vh 5vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* LEFT — Text */}
        <div>
          <p style={{
            color: '#c4667a',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
            marginBottom: '1.5rem',
            fontFamily: 'Outfit, sans-serif'
          }}>
            Detroit Metro · CEO · Author · Keynote Speaker
          </p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 6vw, 5.8rem)',
            lineHeight: 1.0, fontWeight: 900,
            marginBottom: '1rem', color: '#2c1f0e'
          }}>
            Forget Your<br />
            <span style={{ color: '#b8860b' }}>Granddad.</span><br />
            <span style={{ fontSize: '0.58em', color: '#c4667a' }}>Unleash Your Inner CEO.</span>
          </h1>

          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(to right, #b8860b, #c4667a)',
            margin: '1.75rem 0'
          }} />

          <p style={{
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            color: '#7a5c3a',
            lineHeight: 1.85,
            maxWidth: '440px',
            marginBottom: '2.5rem'
          }}>
            CEO of Automation Workz · Author of 8 Books ·
            Transforming how organizations think about talent,
            tech, and the workforce of tomorrow.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#book-ida" style={{
              background: 'linear-gradient(135deg, #b8860b, #9a6f09)',
              color: '#faf6ef',
              padding: '0.95rem 2.2rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.7rem, 1.1vw, 0.82rem)',
              fontFamily: 'Outfit, sans-serif',
              boxShadow: '0 4px 20px rgba(184,134,11,0.25)'
            }}>Book a Keynote</a>
            <a href="#speaking" style={{
              border: '1.5px solid #b8860b',
              color: '#b8860b',
              padding: '0.95rem 2.2rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontSize: 'clamp(0.7rem, 1.1vw, 0.82rem)',
              fontFamily: 'Outfit, sans-serif',
              background: 'transparent'
            }}>View Keynotes</a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
          {/* Decorative gold ring behind photo */}
          <div style={{
            position: 'absolute',
            width: '88%',
            paddingBottom: '88%',
            borderRadius: '50%',
            border: '2px solid rgba(184,134,11,0.25)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) scale(1.08)',
          }} />
          {/* Rose accent ring */}
          <div style={{
            position: 'absolute',
            width: '88%',
            paddingBottom: '88%',
            borderRadius: '50%',
            border: '1px solid rgba(196,102,122,0.18)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%) scale(1.18)',
          }} />

          {/* Photo */}
          <img
            src={idaPhoto}
            alt="Ida Byrd-Hill — Keynote Speaker"
            style={{
              width: '85%',
              maxWidth: '420px',
              borderRadius: '50%',
              display: 'block',
              objectFit: 'cover',
              boxShadow: '0 20px 60px rgba(184,134,11,0.2), 0 8px 24px rgba(0,0,0,0.1)',
              border: '4px solid rgba(184,134,11,0.3)',
              position: 'relative',
              zIndex: 1,
            }}
          />

          {/* Floating badge */}
          <div style={{
            position: 'absolute',
            bottom: '8%',
            left: '2%',
            background: '#fff9f2',
            border: '1px solid rgba(184,134,11,0.2)',
            boxShadow: '0 8px 24px rgba(184,134,11,0.15)',
            padding: '0.85rem 1.25rem',
            zIndex: 2,
          }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#b8860b', fontWeight: 700, lineHeight: 1 }}>8</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', color: '#7a5c3a', letterSpacing: '0.05em', marginTop: '0.2rem' }}>Books Published</div>
          </div>

          {/* Floating badge 2 */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '0%',
            background: '#fff9f2',
            border: '1px solid rgba(196,102,122,0.2)',
            boxShadow: '0 8px 24px rgba(196,102,122,0.12)',
            padding: '0.85rem 1.25rem',
            zIndex: 2,
          }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#c4667a', fontWeight: 700, lineHeight: 1 }}>Top 10</div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.7rem', color: '#7a5c3a', letterSpacing: '0.05em', marginTop: '0.2rem' }}>Cyber Bootcamp</div>
          </div>
        </div>

      </div>
    </section>
  )
}
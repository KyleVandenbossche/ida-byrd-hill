const keynotes = [
  {
    pillar: 'Forget Your Granddad',
    title: 'The New Rules of Work',
    desc: 'The workforce your grandfather knew is gone. Ida challenges organizations and professionals to shed outdated thinking and embrace the skills, mindset, and strategies that actually drive careers forward today.',
    color: '#b8860b'
  },
  {
    pillar: 'Unleash Your Inner CEO',
    title: 'Own Your Career Like a Business',
    desc: 'Every professional is the CEO of their own career. Ida equips audiences with the entrepreneurial mindset needed to lead, pivot, and thrive — regardless of title or industry.',
    color: '#c4667a'
  },
  {
    pillar: 'Workforce Development',
    title: 'Closing the Tech Skills Gap',
    desc: "How organizations can train front-line workers in cybersecurity, data analytics, and network engineering to meet the real demands of today's digital economy.",
    color: '#b8860b'
  },
  {
    pillar: 'Talent Strategy',
    title: 'The Invisible Talent Market',
    desc: 'Based on her book — uncovering hidden workforce potential and solving the talent shortage without outsourcing or visas. A must-hear for HR leaders and executives.',
    color: '#c4667a'
  },
]

export default function Speaking() {
  return (
    <section id="speaking" style={{
      width: '100%',
      padding: '8rem 5vw',
      background: 'linear-gradient(180deg, #faf6ef 0%, #f5ead8 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#c4667a', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.78rem', marginBottom: '1rem' }}>Keynotes & Topics</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '0.75rem', color: '#2c1f0e' }}>What Ida Brings to Your Stage</h2>
        <p style={{ color: '#7a5c3a', marginBottom: '3.5rem', fontSize: '1rem', maxWidth: '520px', lineHeight: 1.7 }}>
          Rooted in two powerful pillars — every keynote is built to move people, shift mindsets, and drive results.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {keynotes.map((k, i) => (
            <div key={i} style={{
              padding: '2.5rem',
              background: '#fff9f2',
              border: '1px solid rgba(184,134,11,0.12)',
              borderTop: `3px solid ${k.color}`,
              boxShadow: '0 2px 16px rgba(184,134,11,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,134,11,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(184,134,11,0.06)'
            }}>
              <p style={{ color: k.color, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{k.pillar}</p>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', lineHeight: 1.2, color: '#2c1f0e' }}>{k.title}</h3>
              <p style={{ color: '#7a5c3a', lineHeight: 1.8, fontSize: '0.92rem' }}>{k.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
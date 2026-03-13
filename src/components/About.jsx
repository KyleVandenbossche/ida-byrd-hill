export default function About() {
  return (
    <section id="about" style={{
      width: '100%',
      padding: '8rem 5vw',
      background: '#fff9f2',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          alignItems: 'start'
        }}>
          <div>
            <p style={{ color: '#c4667a', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.78rem', marginBottom: '1rem' }}>About Ida</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '1.5rem', color: '#2c1f0e' }}>
              Not Your Granddad's<br /><span style={{ color: '#b8860b' }}>Kind of Leader.</span>
            </h2>
            <p style={{ color: '#7a5c3a', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
              Ida Byrd-Hill is the CEO of <strong style={{ color: '#2c1f0e' }}>Automation Workz</strong> — ranked among the
              Top 10 Cybersecurity Bootcamps in the U.S. — training front-liners in cybersecurity,
              data analytics, network engineering, and software development.
            </p>
            <p style={{ color: '#7a5c3a', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.97rem' }}>
              A prolific author of <strong style={{ color: '#2c1f0e' }}>eight books</strong>, including
              <em style={{ color: '#b8860b' }}> Invisible Talent Market</em>, Ida brings rare expertise
              across HR, executive search, finance, and technology to every stage she steps on.
            </p>
            <p style={{ color: '#7a5c3a', lineHeight: 1.9, fontSize: '0.97rem' }}>
              BA in Economics · <strong style={{ color: '#2c1f0e' }}>University of Michigan – Ann Arbor</strong><br />
              MBA · Jack Welch Management Institute
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              ['Top 10', 'Cybersecurity Bootcamp in the U.S.', '#b8860b'],
              ['8 Books', 'Published on Workforce & Talent Strategy', '#c4667a'],
              ['Detroit', 'Metro Based · Nationally Recognized', '#b8860b'],
              ['2 Pillars', 'Forget Your Granddad · Unleash Your Inner CEO', '#c4667a'],
            ].map(([stat, label, color]) => (
              <div key={stat} style={{
                padding: '1.5rem 1.75rem',
                border: `1px solid ${color}22`,
                borderLeft: `3px solid ${color}`,
                background: `${color}08`,
                borderRadius: '2px'
              }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color, fontWeight: 700 }}>{stat}</div>
                <div style={{ color: '#7a5c3a', fontSize: '0.85rem', marginTop: '0.2rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
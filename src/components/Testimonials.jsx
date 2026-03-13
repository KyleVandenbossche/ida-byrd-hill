const testimonials = [
  { quote: "Ida doesn't just inspire — she equips. Our team left with real tools and a completely new sense of direction.", name: "Marcus T.", role: "HR Director, Detroit" },
  { quote: "One of the most impactful speakers we've ever brought in. She reads the room and delivers every time.", name: "Priya M.", role: "Workforce Development Manager" },
  { quote: "Ida's message on career reinvention changed how I saw my own future. Absolutely transformational.", name: "Jasmine W.", role: "Program Participant" },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      width: '100%',
      padding: '8rem 5vw',
      background: '#fff9f2'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ color: '#c4667a', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.78rem', marginBottom: '1rem' }}>What People Say</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '3rem', color: '#2c1f0e' }}>The Room Always Remembers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              padding: '2.5rem',
              background: 'linear-gradient(145deg, #fdf6e8, #fff9f2)',
              border: '1px solid rgba(184,134,11,0.15)',
              boxShadow: '0 2px 16px rgba(184,134,11,0.06)'
            }}>
              <div style={{
                color: '#b8860b', fontSize: '4rem',
                fontFamily: 'Cormorant Garamond, serif',
                lineHeight: 0.7, marginBottom: '1.5rem'
              }}>"</div>
              <p style={{ color: '#5c3d1e', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(184,134,11,0.15)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#b8860b' }}>{t.name}</div>
                <div style={{ color: '#7a5c3a', fontSize: '0.8rem', marginTop: '0.2rem' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
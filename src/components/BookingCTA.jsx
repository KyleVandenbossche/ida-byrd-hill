export default function BookingCTA() {
  return (
    <section id="book-ida" style={{
      width: '100%',
      padding: '8rem 5vw',
      textAlign: 'center',
      background: 'linear-gradient(160deg, #f5ead8 0%, #fdf0e8 100%)',
      borderTop: '1px solid rgba(196,102,122,0.15)'
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <p style={{ color: '#c4667a', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.78rem', marginBottom: '1rem' }}>Book a Keynote</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, color: '#2c1f0e' }}>
          Ready to Bring Ida<br /><span style={{ color: '#b8860b' }}>to Your Stage?</span>
        </h2>
        <p style={{ color: '#7a5c3a', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.85 }}>
          Corporate events, workforce conferences, tech summits, DEI panels —
          Ida delivers keynotes that shift perspective and move organizations forward.
        </p>
        <a href="mailto:hello@automationworkz.com" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #b8860b, #c4667a)',
          color: '#fff9f2',
          padding: '1.1rem 3rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          fontFamily: 'Outfit, sans-serif',
          boxShadow: '0 6px 24px rgba(184,134,11,0.28)'
        }}>Request Ida for Your Event</a>
      </div>
    </section>
  )
}
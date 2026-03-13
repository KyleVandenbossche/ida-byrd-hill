export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      padding: '2rem 5vw',
      borderTop: '1px solid rgba(184,134,11,0.15)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      background: '#faf6ef'
    }}>
      <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#b8860b', fontSize: '1.1rem', fontWeight: 700 }}>
        Ida Byrd-Hill
      </span>
      <span style={{ color: '#7a5c3a', fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} · Automation Workz · Detroit Metro
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {[
          ['Forget Your Granddad', 'https://youtu.be/8GRyAinrsgY'],
          ['Unleash Your Inner CEO', 'https://youtu.be/mdsI_EXEfBc']
        ].map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{
            color: '#7a5c3a', fontSize: '0.75rem',
            letterSpacing: '0.05em', transition: 'color 0.2s'
          }}
          onMouseEnter={e => e.target.style.color = '#b8860b'}
          onMouseLeave={e => e.target.style.color = '#7a5c3a'}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
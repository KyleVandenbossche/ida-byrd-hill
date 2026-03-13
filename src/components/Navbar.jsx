import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 999,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.25rem 5vw',
      background: 'rgba(250,246,239,0.94)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(184,134,11,0.15)',
      width: '100%',
    }}>
      <Link to="/" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem', fontWeight: 700,
        color: '#b8860b', letterSpacing: '0.04em',
        textDecoration: 'none'
      }}>
        Ida Byrd-Hill
      </Link>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {[['About', '#about'], ['Keynotes', '#speaking']].map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{
              color: '#5c3d1e', fontSize: '0.82rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              transition: 'color 0.2s', fontFamily: 'Outfit, sans-serif'
            }}
            onMouseEnter={e => e.target.style.color = '#b8860b'}
            onMouseLeave={e => e.target.style.color = '#5c3d1e'}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/book" style={{
            color: '#fff9f2',
            fontSize: '0.82rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'Outfit, sans-serif',
            background: 'linear-gradient(135deg, #b8860b, #c4667a)',
            padding: '0.55rem 1.25rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Book Ida
          </Link>
        </li>
      </ul>
    </nav>
  )
}
import { useState } from 'react'

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: '#fff9f2',
  border: '1px solid rgba(184,134,11,0.25)',
  color: '#2c1f0e',
  fontSize: '0.95rem',
  fontFamily: 'Outfit, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#7a5c3a',
  marginBottom: '0.5rem',
  fontFamily: 'Outfit, sans-serif',
}

const fieldWrap = {
  display: 'flex',
  flexDirection: 'column',
}

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', title: '', organization: '', email: '', phone: '',
    eventType: '', eventDate: '', location: '', audience: '',
    keynote: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace this with your form backend (Netlify Forms, EmailJS, etc.)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const focusStyle = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? '#b8860b' : 'rgba(184,134,11,0.25)',
    boxShadow: focused === name ? '0 0 0 3px rgba(184,134,11,0.08)' : 'none',
  })

  if (submitted) {
    return (
      <section id="book-ida" style={{ width: '100%', padding: '8rem 5vw', background: 'linear-gradient(160deg, #f5ead8 0%, #fdf0e8 100%)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🪑</div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#2c1f0e', marginBottom: '1rem' }}>
            Thank You!
          </h2>
          <p style={{ color: '#7a5c3a', fontSize: '1rem', lineHeight: 1.8 }}>
            Your booking inquiry has been received. Ida's team will be in touch within 2 business days.
          </p>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #b8860b, #c4667a)', margin: '2rem auto' }} />
          <button onClick={() => setSubmitted(false)} style={{
            background: 'transparent', border: '1.5px solid #b8860b',
            color: '#b8860b', padding: '0.75rem 2rem', cursor: 'pointer',
            fontFamily: 'Outfit, sans-serif', fontSize: '0.8rem',
            letterSpacing: '0.1em', textTransform: 'uppercase'
          }}>Submit Another Inquiry</button>
        </div>
      </section>
    )
  }

  return (
    <section id="book-ida" style={{
      width: '100%',
      padding: '8rem 5vw',
      background: 'linear-gradient(160deg, #f5ead8 0%, #fdf0e8 100%)',
      borderTop: '1px solid rgba(196,102,122,0.15)'
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p style={{ color: '#c4667a', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.78rem', marginBottom: '1rem' }}>Keynote Booking</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#2c1f0e', marginBottom: '1rem', lineHeight: 1.1 }}>
            Bring Ida to<br /><span style={{ color: '#b8860b' }}>Your Stage</span>
          </h2>
          <p style={{ color: '#7a5c3a', fontSize: '1rem', lineHeight: 1.8, maxWidth: '520px' }}>
            Fill out the form below and Ida's team will follow up within 2 business days to discuss availability and details.
          </p>
          <div style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #b8860b, #c4667a)', marginTop: '1.5rem' }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

          {/* Section: Contact Info */}
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#b8860b', marginBottom: '1.25rem', borderBottom: '1px solid rgba(184,134,11,0.15)', paddingBottom: '0.5rem' }}>
              Your Contact Information
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Full Name *</label>
                <input required name="name" value={form.name} onChange={handle}
                  placeholder="Jane Smith"
                  style={focusStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Job Title *</label>
                <input required name="title" value={form.title} onChange={handle}
                  placeholder="Event Coordinator"
                  style={focusStyle('title')}
                  onFocus={() => setFocused('title')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Organization *</label>
                <input required name="organization" value={form.organization} onChange={handle}
                  placeholder="Company or Association"
                  style={focusStyle('organization')}
                  onFocus={() => setFocused('organization')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Email Address *</label>
                <input required type="email" name="email" value={form.email} onChange={handle}
                  placeholder="jane@company.com"
                  style={focusStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Phone Number</label>
                <input name="phone" value={form.phone} onChange={handle}
                  placeholder="(313) 000-0000"
                  style={focusStyle('phone')}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)} />
              </div>
            </div>
          </div>

          {/* Section: Event Info */}
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#b8860b', marginBottom: '1.25rem', borderBottom: '1px solid rgba(184,134,11,0.15)', paddingBottom: '0.5rem' }}>
              Event Details
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Event Type *</label>
                <select required name="eventType" value={form.eventType} onChange={handle}
                  style={{ ...focusStyle('eventType'), appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('eventType')}
                  onBlur={() => setFocused(null)}>
                  <option value="">Select event type</option>
                  <option>Corporate Conference</option>
                  <option>Workforce Development Summit</option>
                  <option>DEI / Inclusion Panel</option>
                  <option>Tech & Innovation Event</option>
                  <option>University / College</option>
                  <option>Association Meeting</option>
                  <option>Workshop / Training</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Event Date *</label>
                <input required type="date" name="eventDate" value={form.eventDate} onChange={handle}
                  style={focusStyle('eventDate')}
                  onFocus={() => setFocused('eventDate')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Event Location *</label>
                <input required name="location" value={form.location} onChange={handle}
                  placeholder="City, State or Virtual"
                  style={focusStyle('location')}
                  onFocus={() => setFocused('location')}
                  onBlur={() => setFocused(null)} />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Expected Audience Size</label>
                <select name="audience" value={form.audience} onChange={handle}
                  style={{ ...focusStyle('audience'), appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('audience')}
                  onBlur={() => setFocused(null)}>
                  <option value="">Select range</option>
                  <option>Under 50</option>
                  <option>50 – 150</option>
                  <option>150 – 500</option>
                  <option>500 – 1,000</option>
                  <option>1,000+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Keynote Preference */}
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#b8860b', marginBottom: '1.25rem', borderBottom: '1px solid rgba(184,134,11,0.15)', paddingBottom: '0.5rem' }}>
              Speaking Preferences
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Preferred Keynote Topic</label>
                <select name="keynote" value={form.keynote} onChange={handle}
                  style={{ ...focusStyle('keynote'), appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('keynote')}
                  onBlur={() => setFocused(null)}>
                  <option value="">Select a topic</option>
                  <option>Forget Your Granddad — The New Rules of Work</option>
                  <option>Unleash Your Inner CEO</option>
                  <option>Closing the Tech Skills Gap</option>
                  <option>The Invisible Talent Market</option>
                  <option>Open to Ida's Recommendation</option>
                </select>
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Estimated Budget</label>
                <select name="budget" value={form.budget} onChange={handle}
                  style={{ ...focusStyle('budget'), appearance: 'none', cursor: 'pointer' }}
                  onFocus={() => setFocused('budget')}
                  onBlur={() => setFocused(null)}>
                  <option value="">Select range</option>
                  <option>Under $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000 – $20,000</option>
                  <option>$20,000+</option>
                  <option>To Be Determined</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div style={fieldWrap}>
            <label style={labelStyle}>Additional Notes or Questions</label>
            <textarea name="message" value={form.message} onChange={handle}
              placeholder="Tell us more about your event, goals, or anything else Ida's team should know..."
              rows={5}
              style={{
                ...focusStyle('message'),
                resize: 'vertical',
                borderColor: focused === 'message' ? '#b8860b' : 'rgba(184,134,11,0.25)',
                boxShadow: focused === 'message' ? '0 0 0 3px rgba(184,134,11,0.08)' : 'none',
              }}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)} />
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{
              background: 'linear-gradient(135deg, #b8860b, #c4667a)',
              color: '#fff9f2',
              padding: '1.1rem 3rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              fontFamily: 'Outfit, sans-serif',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(184,134,11,0.25)',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Submit Booking Inquiry
            </button>
            <p style={{ color: '#7a5c3a', fontSize: '0.8rem' }}>
              * Required fields · Response within 2 business days
            </p>
          </div>

        </form>
      </div>
    </section>
  )
}
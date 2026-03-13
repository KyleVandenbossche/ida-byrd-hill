import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Speaking from './components/Speaking'
import Testimonials from './components/Testimonials'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import RockingChair from './components/RockingChair'

export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <RockingChair />
      <Navbar />
      <Hero />
      <About />
      <Speaking />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  )
}
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RockingChair from './components/RockingChair'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <RockingChair />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Nav from './Components/Nav/Nav';
import TourListPage from './Components/Pages/Tours';
import HotelDetailPage from './Components/Pages/Hotels';
import TransportDetailPage from './Components/Pages/Transports';
import ContactSection from './Components/Pages/Contact';
import BlogSection from './Components/Pages/Blog';
import Restaurants from './Components/Pages/Restaurant';
import CartPage from './Components/Pages/Cart';
import BookingConfirmation from "./Components/Pages/Tour_Booking_Summery";
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import TourDetailPage from './Components/Pages/TourDetail';
import Index from './Components/Pages/Index';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/TourDetails/:id" element={<TourDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/Tour_Booking_Summery" element={<BookingConfirmation />} />
        <Route path="/tours" element={<TourListPage />} />
        <Route path="/hotels" element={<HotelDetailPage />} />
        <Route path="/transport" element={<TransportDetailPage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

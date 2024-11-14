import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Rooms from './Components/Rooms/Room';
import Amenities from './Components/Amenities/Amenities';
import Footer from './Components/Footer/Footer';
import Attraction from './Components/Attraction/Attraction';
import Introduction from './Components/Introduction/ImageRevealOnScroll';
import Testimonial from './Components/Testimonials/Testimonial';

function App() {
  return (
    <div className="app-background">
      <Nav />
      <Introduction />
      <Header />
      <About />
      <Attraction />
      <Services />
      <Rooms />
      <Amenities />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

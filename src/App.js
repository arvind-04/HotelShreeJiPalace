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
      {/* You can still use Router if you plan to add separate pages later */}
      <Router>
        <div id="home">
          <Nav />
        </div>
        <div id="introduction">
          <Introduction />
        </div>
        
        <div id="header">
          <Header />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="attraction">
          <Attraction />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="rooms">
          <Rooms />
        </div>

        <div id="amenities">
          <Amenities />
        </div>

        <div id="testimonials">
          <Testimonial />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

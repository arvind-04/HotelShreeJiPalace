import React from 'react';
import footerCSS from './../Footer/Footer.module.css';
import img from './../../Assests/foot-bottom.png';
import { Link } from 'react-scroll'; // Importing Link from react-scroll

export default function Footer() {
  // Function to open Google Maps
  const openGoogleMaps = () => {
    const address = "18, Sajjangarh Colony, Rampura, Udaipur (Rajasthan), 313001";
    const googleMapsURL = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(googleMapsURL, '_blank');
  };

  return (
    <>
      <footer className={`${footerCSS.footer_wrapper} section`}>
        <div className={footerCSS.FooterLinks}>
          <div className={footerCSS.logo}>
            <h2>Hotel ShreeJi Palace</h2>
            <p>
              Hotel Shree Ji Palace, nestled in the heart of Udaipur, offers a blend of luxury and comfort with traditional Rajasthani hospitality. Our elegant rooms, exquisite dining, and world-class amenities provide an unforgettable experience. Whether you're visiting for business or leisure, we ensure a stay filled with warmth and tranquility. Enjoy the charm of Udaipur from the comfort of our welcoming palace-like haven.
            </p>
          </div>
        </div>

        <div className={footerCSS.FooterLinks}>
          <h3>Quick Links</h3>
          <p><Link to="about" smooth={true} duration={500}>About</Link></p>
          <p><Link to="services" smooth={true} duration={500}>Services</Link></p>
          <p><Link to="rooms" smooth={true} duration={500}>Rooms</Link></p>
          <p><Link to="amenities" smooth={true} duration={500}>Amenities</Link></p>
          <p><Link to="attraction" smooth={true} duration={500}>Attraction</Link></p>
        </div>

        <div className={footerCSS.FooterLinks}>
          <h3>Contact</h3>
          <p>
            Address : 
            <span onClick={openGoogleMaps} style={{ cursor: 'pointer', textDecoration: 'none' }}>
              18, Sajjangarh Colony, Rampura, Udaipur (Rajasthan), 313001
            </span>
          </p>
          <p>Email : <span>hotelshreejipalaceudpr@gmail.com</span></p>
          <p>Phone: <span>8949098841</span></p>
        </div>
      </footer>
      
      <img 
        src={img}
        alt="" 
        className={footerCSS.footerImage} 
      />
    </>
  );
}

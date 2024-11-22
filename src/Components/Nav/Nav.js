import React, { useState, useRef, useEffect } from 'react';
import navCSS from './Nav.module.css';
import { Link } from 'react-scroll';  // Import Link from react-scroll

export default function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef();
  const navbar = useRef();

  const menuHandler = () => {
    setIsMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbar.current) {
        if (window.scrollY > 100) {
          navbar.current.classList.add(navCSS.showNav);
        } else {
          navbar.current.classList.remove(navCSS.showNav);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={navCSS.nav_wrapper} ref={navbar}>
      <div className={navCSS.logo}>
        <span>ShreeJiPalace</span>
      </div>
      <ul ref={menuRef} className={`${navCSS.menu} ${isMenuVisible ? navCSS.showNav : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="rooms" smooth={true} duration={500}>
            Rooms
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        
      </ul>

      <div className={navCSS.Nav_btns}>
        <i 
          className='ri-menu-4-line' 
          id={navCSS.bars} 
          onClick={menuHandler} 
          aria-expanded={isMenuVisible}
          aria-label="Toggle navigation menu"
        ></i>
      </div>
    </nav>
  );
}

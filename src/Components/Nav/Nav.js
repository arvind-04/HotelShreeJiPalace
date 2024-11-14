import React, { useState, useRef, useEffect } from 'react';
import navCSS from './Nav.module.css';
import About from '../About/About';
import Testimonial from './../Testimonials/Testimonial'
import Services from '../Services/Services';
import Rooms from '../Rooms/Room';
export default function Nav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef();
    const navbar = useRef();

    const menuHandler = () => {
        setIsMenuVisible((prev) => !prev);
    };

    // Handle scroll event inside useEffect
    useEffect(() => {
        const handleScroll = () => {
            // Make sure navbar.current is not null or undefined before accessing classList
            if (navbar.current) {
                if (window.scrollY > 100) {
                    navbar.current.classList.add(navCSS.showNav);
                } else {
                    navbar.current.classList.remove(navCSS.showNav);
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this useEffect runs only once when the component mounts

    // Handle clicks outside of the menu to close it
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener for detecting clicks outside the menu
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={navCSS.nav_wrapper} ref={navbar}>
            <div className={navCSS.logo}>
                <a href="#"><span>ShreeJi</span></a>
            </div>
            <ul ref={menuRef} className={`${navCSS.menu} ${isMenuVisible ? navCSS.showNav : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href={About}>About Us</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href={Rooms}>Rooms</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
            <div className={navCSS.Nav_btns}>
                {/* <button>Book Now</button> */}
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

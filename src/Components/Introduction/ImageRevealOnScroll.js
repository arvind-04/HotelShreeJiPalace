import React, { useEffect, useRef, useState } from 'react';
import './ImageRevealOnScroll.css';
import img1 from './../../Assests/shreeji.png'; // Image file location

const ImageRevealOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scale, setScale] = useState(1);
    const imageRef = useRef(null);

    const handleScroll = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            setIsVisible(isInView);

            // Calculate scale based on how much of the image is in view
            const scrollPosition = Math.max(0, window.innerHeight - rect.top);
            const scaleValue = 1 + Math.min(scrollPosition / 300, 1); // Scale up to a maximum of 2x
            setScale(scaleValue);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="image-container">
            {/* Greeting message above the image */}
            <div className="greeting-message">
                <h2>Welcome to <span>Hotel Shree Ji Palace</span></h2>
                <p>Experience <span>the luxury and comfort like never before</span></p>
            </div>
            <br></br>
            <br />
            <br /> <br></br>
            <br />
            <br /> <br></br>
            <br />
            <br />
            <br />
            
            {/* Image with scroll reveal effect */}
            <div 
                className={`image ${isVisible ? 'visible' : ''}`} 
                ref={imageRef}
                style={{ transform: `scale(${scale})` }}
            >
                <img src={img1} alt="Scroll to reveal" />
            </div>
        </div>
    );
};

export default ImageRevealOnScroll;

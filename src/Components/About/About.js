import React from 'react';
import CountUp from 'react-countup';  // Import CountUp
import aboutCSS from './../About/About.module.css';
import aboutImg from './../../Assests/dom.jpeg'; // Image import

export default function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_img}>
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className={aboutCSS.about_content}>
        <small className="section_Heading">The Royal Hotel</small>
        <h2 className="section_Title">
          Where Elegance Meets <span>Excellence</span>
        </h2>
        <p>
        Welcome to Hotel Shree Ji Palace, a luxurious haven nestled in the heart of Udaipur, Rajasthan. Our hotel offers a perfect blend of tradition, comfort, and elegance, providing guests with an unforgettable experience. With breathtaking views, exceptional services, and a serene ambiance, we pride ourselves on being the ideal choice for travelers seeking both relaxation and adventure.

At Hotel Shree Ji Palace, every room is a sanctuary of comfort, equipped with modern amenities while reflecting the rich cultural heritage of Rajasthan. Whether you're here for business or leisure, our attentive staff ensures that every need is met with warmth and professionalism.

Indulge in a variety of exquisite cuisines at our restaurant, enjoy the tranquility of our luxurious rooms, or explore the city’s iconic attractions. Hotel Shree Ji Palace is more than just a place to stay; it's an experience to cherish.
        </p>
        <div className={aboutCSS.Cards}>
          <p>
            <CountUp start={0} end={260} duration={6} separator="," />
            <span> Awards Wins</span>
          </p>
          <p>
            <CountUp start={0} end={2500} duration={10} separator="," />
            <span> Visitors Visits</span>
          </p>
          <p>
            <CountUp start={0} end={150000} duration={15} separator="," />
            <span> Events</span>
          </p>
        </div>
      </div>
    </div>
  );
}

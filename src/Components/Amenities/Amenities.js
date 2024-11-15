import React from 'react'
import aminitiesCSS from './../Amenities/Amenities.module.css';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

import ReactDOM from "react-dom";
import NotAvailableScreen from "../NotAvail/NotAvailableScreen";
import { Autoplay } from 'swiper/modules';
import img1 from './../../Assests/view.jpg'
import img2 from './../../Assests/waiting.jpg'
import img3 from './../../Assests/rooftop_restro.avif'
export default function Amenities() {
    const handleBookNowClick = () => {
        // Open a new window with specific size
        const newWindow = window.open('', '_blank', 'width=800,height=600');
    
        // Set the title of the new window
        newWindow.document.title = 'Booking Not Available';
    
        // Render the NotAvailableScreen component into the new window's body
        ReactDOM.render(<NotAvailableScreen />, newWindow.document.body);
      };
  return (
    <div className={`${aminitiesCSS.amenities_wrapper} section`}>
        <small className='section_Heading'>Luxury Amenities</small>
        <h2 className='section_Title'>Our Best <span>Amenities</span></h2>

        <Swiper 
            slidesPerView={1}
            autoplay = {{
                delay: 1000,
            }}
            speed={2000}
            modules={[Autoplay]} 
            spaceBetween={30} 
            loop={true} 
            className={aminitiesCSS.swiper}
         >
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img1} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>City View</h2>
                        <p>The city view from the top of Hotel Shree Ji Palace offers a stunning panorama of Udaipur. The serene lakes, majestic palaces, and bustling streets create a picturesque landscape. As the sun sets, the city is bathed in a golden glow, providing a mesmerizing view that captures the essence of Udaipur. It’s an unforgettable sight, making the hotel’s rooftop the perfect place to unwind and enjoy the beauty of the city.</p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img2} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Waiting Hall</h2>
                        <p>Our Waiting Hall is a harmonious blend of traditional Indian craftsmanship and modern comfort. Adorned with handcrafted wooden furniture, intricate carvings, and cultural artwork, it reflects the rich heritage of the region. The space exudes warmth with its inviting atmosphere, offering a serene retreat for every guest. Here, tradition and hospitality seamlessly come together to provide a welcoming experience.</p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img3} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Restro & Cafe</h2>
                        <p>Our Rooftop Café offers a breathtaking view of the majestic Monsoon Palace, making it the perfect spot to unwind. Surrounded by tranquil ambiance and the beauty of Udaipur's skyline, it serves a variety of delectable dishes and refreshing beverages. The café combines cozy seating with a panoramic view, creating an unforgettable dining experience. Enjoy the charm of the city while savoring the finest flavors under the open sky.</p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

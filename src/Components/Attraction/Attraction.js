import React from 'react'
import AttractionCSS from './../Attraction/Attraction.module.css';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import ReactDOM from "react-dom";
import NotAvailableScreen from "../NotAvail/NotAvailableScreen";
import { Autoplay } from 'swiper/modules';
import img1 from './../../Assests/mp.jpg'
import img2 from './../../Assests/cp.jpg'
import img3 from './../../Assests/sb.jpg'
import img4 from './../../Assests/lp.jpg'
export default function Attraction() {
    const handleBookNowClick = () => {
        // Open a new window with specific size
        const newWindow = window.open('', '_blank', 'width=800,height=600');
    
        // Set the title of the new window
        newWindow.document.title = 'Booking Not Available';
    
        // Render the NotAvailableScreen component into the new window's body
        ReactDOM.render(<NotAvailableScreen />, newWindow.document.body);
      };
  return (
    <div className={`${AttractionCSS.attraction_wrapper} section`}>
        <small className='section_Heading'>Luxury Attraction</small>
        <h2 className='section_Title'>Our Best <span>Attraction</span></h2>

        <Swiper 
            slidesPerView={1}
            autoplay = {{
                delay: 1000,
            }}
            speed={2000}
            modules={[Autoplay]} 
            spaceBetween={30} 
            loop={true} 
            className={AttractionCSS.swiper}
         >
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img1} alt="attraction-img" />
                    <div className={AttractionCSS.content}>
                        <h2>MONSOON PALACE</h2>
                        <p>Situated just outside Udaipur, this 19th-century palace is built on top of Bansdara hills. Used as a monsoon palace and hunting lodge, its builder, Maharana Sajjan Singh, originally planned to make it an astronomical center. The plan was cancelled with Maharana Sajjan Singh's premature death. It is still an awe-inspiring sight on the Udaipur skyline and offers spectacular views of the city and the areas around.</p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img2} alt="attraction-img" />
                    <div className={AttractionCSS.content}>
                        <h2>CITY PALACE</h2>
                        <p>A majestic architectural marvel towering over the lake on a hill surrounded by crenelated walls, it is a conglomeration of courtyards, pavilions, terraces, corridors, rooms and hanging gardens. The main entrance is through the triple arched gate, the "Tripolia" with eight marble porticos, The Maharanas were weighed under the gate in gold, the equivalent amount of which was distributed among the populace. </p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img3} alt="attraction-img"/>
                    <div className={AttractionCSS.content}>
                        <h2>SAHASTRA BAHU TEMPLE</h2>
                        <p>Located about 22 km from Udaipur, in Nagda village on NH-8, stands the Sahastra Bahu Temple. The temple is dedicated to Lord Vishnu, and the name means ‘one with a million arms’, which is one of the forms of Vishnu. The site of the temple borders green marshlands, and is home to numerous date palms which give the temple a unique oasis-like ambiance. </p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img4} alt="attraction-img" />
                    <div className={AttractionCSS.content}>
                        <h2>LAKE PICHOLA</h2>
                        <p>Picholi was the name of a village that lent its name to the lake. The islands of Jagniwas and Jagmandir are housed in this lake. Along the eastern banks of the lake lies the City Palace. A boat ride in the lake around sunset offers a breathtaking view of the Lake and City Palace.</p>
                        <button onClick={handleBookNowClick}>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

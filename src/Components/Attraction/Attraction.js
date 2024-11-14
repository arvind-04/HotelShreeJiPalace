import React from 'react'
import AttractionCSS from './../Attraction/Attraction.module.css';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
import img1 from './../../Assests/cp2.jpg'
import img2 from './../../Assests/cp.jpg'
import img3 from './../../Assests/fs.jpg'
export default function Attraction() {
  return (
    <div className={`${AttractionCSS.attraction_wrapper} section`}>
        <small className='section_Heading'>Luxury attraction</small>
        <h2 className='section_Title'>Our Best <span>attraction</span></h2>

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
                        <h2>Swimming Pool</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam sunt rerum voluptatem iure alias laudantium et itaque esse error repudiandae, nesciunt a sed placeat sint reprehenderit quia atque maiores!</p>
                        <button>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img2} alt="attraction-img" />
                    <div className={AttractionCSS.content}>
                        <h2>Gym</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam sunt rerum voluptatem iure alias laudantium et itaque esse error repudiandae, nesciunt a sed placeat sint reprehenderit quia atque maiores!</p>
                        <button>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={AttractionCSS.attraction_item}>
                    <img src={img3} alt="attraction-img"/>
                    <div className={AttractionCSS.content}>
                        <h2>Restro & Cafe</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam sunt rerum voluptatem iure alias laudantium et itaque esse error repudiandae, nesciunt a sed placeat sint reprehenderit quia atque maiores!</p>
                        <button>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

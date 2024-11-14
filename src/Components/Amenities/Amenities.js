import React from 'react'
import aminitiesCSS from './../Amenities/Amenities.module.css';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
import img1 from './../../Assests/backimg.jpg'
import img2 from './../../Assests/waiting.jpg'
import img3 from './../../Assests/rooftop_restro.avif'
export default function Amenities() {
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
                        <h2>Swimming Pool</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam sunt rerum voluptatem iure alias laudantium et itaque esse error repudiandae, nesciunt a sed placeat sint reprehenderit quia atque maiores!</p>
                        <button>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img2} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
                        <h2>Waiting Hall</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam sunt rerum voluptatem iure alias laudantium et itaque esse error repudiandae, nesciunt a sed placeat sint reprehenderit quia atque maiores!</p>
                        <button>Book Now !</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={aminitiesCSS.amenities_item}>
                    <img src={img3} alt="amenities-img" />
                    <div className={aminitiesCSS.content}>
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

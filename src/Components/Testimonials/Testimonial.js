import React from 'react'
import testimonialCSS from './../Testimonials/Testimonial.module.css';
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import { Autoplay } from 'swiper/modules';

import img1 from './../../Assests/manager.jpg';
import img2 from './../../Assests/cust1.jpg';
import img3 from './../../Assests/cust2.jpg';
export default function Testimonial() {
  return (
    <div className={`${testimonialCSS.testimonial_wrapper} section`}>
        <small className='section_Heading'>Testimonials</small>
        <h2 className='section_Title'>What Our Clients <span>Says</span></h2>

        <Swiper 
            slidesPerView={1}
            autoplay = {{
                delay: 1000,
            }}
            breakpoints={{
                0:{
                    slidesPerView:1
                },
                1200:{
                    slidesPerView:2
                }
            }}
            speed={1500}
            modules={[Autoplay]} 
            spaceBetween={30} 
            loop={true} 
            className={testimonialCSS.swiper}
         >
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img1} alt="" />
                    <div className={testimonialCSS.cotent}>
                        <h3>John Doe <span>manager</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis inventore tempore? Vitae quo, natus, hic quae ipsa aperiam quidem magni veritatis voluptatibus accusantium, atque doloremque voluptatum ratione iure quaerat!</p>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img2} alt="" />
                    <div className={testimonialCSS.cotent}>
                        <h3>John Doe <span>manager</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis inventore tempore? Vitae quo, natus, hic quae ipsa aperiam quidem magni veritatis voluptatibus accusantium, atque doloremque voluptatum ratione iure quaerat!</p>
                        
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img3} alt="" />
                    <div className={testimonialCSS.cotent}>
                        <h3>John Doe <span>manager</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perspiciatis inventore tempore? Vitae quo, natus, hic quae ipsa aperiam quidem magni veritatis voluptatibus accusantium, atque doloremque voluptatum ratione iure quaerat!</p>
                        
                    </div>
                </div>
            </SwiperSlide>

         </Swiper>
    </div>
  )
}

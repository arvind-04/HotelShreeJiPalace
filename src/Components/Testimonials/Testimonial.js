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
                        <h3>Raghav Mehta </h3>
                        <p>"I had an amazing stay at Hotel Shree Ji Palace. The staff was incredibly friendly, and the traditional decor made me feel like I was part of something special. The rooftop café with a view of the Monsoon Palace was my favorite part—truly unforgettable!"</p>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img2} alt="" />
                    <div className={testimonialCSS.cotent}>
                        <h3>Aaradhya Joshi</h3>
                        <p>"The rooms were luxurious, and the ambiance of the hotel was so warm and welcoming. The attention to detail in the design, especially the waiting hall with its traditional touch, made me feel at home. I can’t wait to visit again!"</p>
                        
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={testimonialCSS.testimonial}>
                    <img src={img3} alt="" />
                    <div className={testimonialCSS.cotent}>
                        <h3>Tanishk Sharma</h3>
                        <p>"What a wonderful experience! From the stunning views of Udaipur to the impeccable service, Hotel Shree Ji Palace exceeded all expectations. I was particularly impressed with the Rooftop Café – the perfect place to relax after a day of sightseeing!"</p>
                        
                    </div>
                </div>
            </SwiperSlide>

         </Swiper>
    </div>
  )
}

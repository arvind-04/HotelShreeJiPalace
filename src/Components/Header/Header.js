import React from 'react';
import headerCSS from './../Header/Header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';

const slidesData = [
  {
    slideClass: headerCSS.slide1,
    title: "Enjoy Your Dream Time with Luxury Experience",
    smallText: "Luxury Hotel & Restaurant Website",
    callText: "Call Now 7877899144"
  },
  {
    slideClass: headerCSS.slide2,
    title: "Enjoy Your Dream Time with Luxury Experience",
    smallText: "Luxury Hotel & Restaurant Website",
    callText: "Call Now 7877899144"
  },
  {
    slideClass: headerCSS.slide3,
    title: "Enjoy Your Dream Time with Luxury Experience",
    smallText: "Luxury Hotel & Restaurant Website",
    callText: "Call Now 7877899144"
  },
];

export default function Header() {
  return (
    <div className={headerCSS.header_wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 2500 }}
        parallax={true}
        speed={1500}
        modules={[Autoplay, Parallax]}
        className={headerCSS.swiper}
        aria-label="Luxury Hotel and Restaurant Carousel"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${headerCSS.Header_slide} ${slide.slideClass}`}>
              <div className={headerCSS.content}>
                <small data-swiper-parallax="-200">{slide.smallText}</small>
                <h2 data-swiper-parallax="-400">{slide.title.split(' ').map((word, idx) => 
                  <span key={idx}>{word} </span>
                )}</h2>
                <p data-swiper-parallax="-600">{slide.callText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

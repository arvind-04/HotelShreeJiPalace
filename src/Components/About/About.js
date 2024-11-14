import React from 'react'
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../Assests/backimg.jpg'//To DO
export default function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`}>
        <div className={aboutCSS.about_img}>
            <img src={aboutImg} alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>
            <small className='section_Heading'>The Royal Hotel</small>
            <h2 className='section_Title'>Where Elegance Meets <span>Excellance</span></h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti in voluptatibus consequatur quaerat vero, incidunt maxime iure numquam maiores perspiciatis blanditiis nostrum odit sed minima voluptas assumenda delectus sint quis.</p>
            <div className={aboutCSS.Cards}>
                <p>260+ <span>Awards Wins</span></p>
                <p>2500+ <span> Visitors Visits</span></p>
                <p>150k+ <span>Events</span></p>
            </div>
        </div>

    </div>
  )
}

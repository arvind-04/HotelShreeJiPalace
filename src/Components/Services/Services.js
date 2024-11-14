import React from 'react'
import ServiceCSS from './../Services/Services.module.css';
export default function Services() {
  return (
    <div className={`${ServiceCSS.Service_wrapper} section`}>
        <small className='section_Heading'>Facillities</small>
        <h2 className='section_Title'>Our Best <span>Services</span></h2>

        <div className={ServiceCSS.Service_cards}>
            <div className={ServiceCSS.Service_card}>
                <i className="ri-hotel-line"></i>
                <h3>Basic Facilities</h3>
                <p>- Reception Front Desk</p>
                <p>- Room Services</p>
                <p>- House Keeping</p>
                <p>- WiFi & Parking</p>
            </div>
            <div className={ServiceCSS.Service_card}>
                <i className="ri-hotel-bed-line"></i>
                <h3>Room Amities</h3>
                <p>- Comfortable bedding</p>
                <p>- Bed Room</p>
                <p>- TV and AC</p>
                <p>- Restaurant</p>
            </div>
            <div className={ServiceCSS.Service_card}>
                <i className="ri-goblet-line"></i>
                <h3>Dining options</h3>
                <p>- RoofTop Cafe</p>
                <p>- Bar & Lounge</p>
                <p>- Cafe & Canteen</p>
                <p>- Room Service</p>
            </div>
            <div className={ServiceCSS.Service_card}>
                <i className="ri-restaurant-line"></i>
                <h3>Special Features</h3>
                <p>- Custom Rooms</p>
                <p>- Cricket Ground</p>
                <p>- Gym</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import footerCSS from './../Footer/Footer.module.css';
import img from './../../Assests/foot-bottom.png'
export default function Footer() {
  return (
    <>
    <footer className={`${footerCSS.footer_wrapper} section`}>
        <div className={footerCSS.FooterLinks}>
            <div className={footerCSS.logo}>
                <h2>RoyalX</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum magni iste repellat ad sed corporis voluptas alias fuga. Reiciendis ipsa ducimus aliquam culpa incidunt suscipit, eligendi eveniet neque natus.</p>
            </div>
        </div>
        <div className={footerCSS.FooterLinks}>
            <h3>Quick Links</h3>
            <p>About</p>
            <p>Contact Us</p>
            <p>Rooms</p>
            <p>GYM</p>
            <p>Restaurant</p>
        </div>
        <div className={footerCSS.FooterLinks}>
            <h3>Contact</h3>
            <p>Address : <span>TO DO</span></p>
            <p>Email : <span>hotelshreejipalaceudpr@gmail.com</span></p>
            <p>Phone: <span>8949098841</span></p>
        </div>
    </footer>
    <img src={img}
    alt="Decorative Footer Image" 
    className={footerCSS.footerImage}
/>
</>
  )
}

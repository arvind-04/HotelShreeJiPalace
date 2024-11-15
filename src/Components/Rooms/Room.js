import React from "react";
import roomCSS from './../Rooms/Room.module.css'
import ReactDOM from "react-dom";
import NotAvailableScreen from "../NotAvail/NotAvailableScreen";

function Rooms() {
    const roomData = [
        {
            name: 'Junior Suite',
            price: '₹5,500 to ₹8,000/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                'King Size Bed',
                'Private Balcony',
                'Free Breakfast'
            ],
            className: roomCSS.Card_front1,
            backgroundClass: roomCSS.Card_Back1
        },
        {
            name: 'Twin Room',
            price: '₹2,500 to ₹4,500/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                '2 Single Beds',
                'Air Conditioning',
                'Complimentary Bottled Water'
            ],
            className: roomCSS.Card_front2,
            backgroundClass: roomCSS.Card_Back2
        },
        {
            name: 'Quad Room',
            price: '₹8,000 to ₹11,000/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                '2 Double Beds',
                'Family Friendly',
                'Mini Fridge'
            ],
            className: roomCSS.Card_front3,
            backgroundClass: roomCSS.Card_Back3
        },
        {
            name: 'Deulux Room',
            price: '₹14,000 to ₹18,000/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                'Jacuzzi',
                'Spa Access',
                'Luxury Towels & Linens'
            ],
            className: roomCSS.Card_front4,
            backgroundClass: roomCSS.Card_Back4
        },
        {
            name: 'Exclusive Room',
            price: '₹16,000 to ₹21,000/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                'Ocean View',
                'Private Pool',
                '24/7 Concierge Service'
            ],
            className: roomCSS.Card_front5,
            backgroundClass: roomCSS.Card_Back5
        },
        {
            name: 'Personal Room',
            price: '₹6,000 to ₹10,000/N',
            features: [
                'Daily Cleaning',
                'Home Service',
                'Housekeeping',
                'Wifi & Parking',
                'Personalized Room Service',
                'In-Room Dining',
                'Smart TV & Streaming Services'
            ],
            className: roomCSS.Card_front6,
            backgroundClass: roomCSS.Card_Back6
        }
    ];

    const handleBookNowClick = () => {
        // Open a new window with specific size
        const newWindow = window.open('', '_blank', 'width=800,height=600');

        // Set the title of the new window
        newWindow.document.title = 'Booking Not Available';

        // Render the NotAvailableScreen component into the new window's body
        ReactDOM.render(<NotAvailableScreen />, newWindow.document.body);
    };

    return (
        <div className={`${roomCSS.Rooms_container} section`}>
            <small className="section_Heading">Luxury Suits</small>
            <h2 className="section_Title">Our Best <span>Rooms</span></h2>
            <div className={roomCSS.cards}>
                {roomData.map((room, index) => (
                    <div key={index} className={roomCSS.card_Container}>
                        <div className={roomCSS.card}>
                            <div className={`${roomCSS.Card_front} ${room.className}`}>
                                <button>{room.name}</button>
                            </div>
                            <div className={`${roomCSS.Card_Back} ${room.backgroundClass}`}>
                                <div className={roomCSS.price}>
                                    <p>{room.price}</p>
                                </div>
                                <div className={roomCSS.Card_content}>
                                    <h3>{room.name}</h3>
                                    {room.features.map((feature, featureIndex) => (
                                        <p key={featureIndex}> - {feature}</p>
                                    ))}
                                </div>
                                <div className={roomCSS.BookNow}>
                                    <button onClick={handleBookNowClick}>Book Now</button>
                                    <i className="ri-arrow-right-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rooms;

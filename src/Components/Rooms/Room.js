import React from "react";
import roomCSS from './../Rooms/Room.module.css'

function Rooms(){
    return(
        <div className={`${roomCSS.Rooms_container} section`}>
            <small className="section_Heading">Luxury Suits</small>
            <h2 className="section_Title">Our Best <span>Rooms</span></h2>
            <div className={roomCSS.cards}>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front1}`}>
                            <button>Junior Suite</button>
                        </div>
                        <div className={roomCSS.Card_Back}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div> 
                </div>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front2}`}>
                            <button>Twin Room</button>
                        </div>
                        <div className={`${roomCSS.Card_Back} ${roomCSS.Card_Back2}`}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Junior Suite</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front3}`}>
                            <button>Quad Room</button>
                        </div>
                        <div className={`${roomCSS.Card_Back} ${roomCSS.Card_Back3}`}>
                            <div className={roomCSS.price}>
                                <p>$150/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Quad Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front4}`}>
                            <button>Deulux Room</button>
                        </div>
                        <div className={`${roomCSS.Card_Back} ${roomCSS.Card_Back4}`}>
                            <div className={roomCSS.price}>
                                <p>$200/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Deulux Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front5}`}>
                            <button>Exclusive Room</button>
                        </div>
                        <div className={`${roomCSS.Card_Back} ${roomCSS.Card_Back5}`}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Exclusive Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={roomCSS.card_Container}>
                    <div className={roomCSS.card}>
                        <div className= {`${roomCSS.Card_front} ${roomCSS.Card_front6}`}>
                            <button>Personal Room</button>
                        </div>
                        <div className={`${roomCSS.Card_Back} ${roomCSS.Card_Back6}`}>
                            <div className={roomCSS.price}>
                                <p>$120/N</p>
                            </div>
                            <div className={roomCSS.Card_content}>
                                <h3>Personal Room</h3>
                                <p> - Daily Cleaning</p>
                                <p> - Home Service</p>
                                <p> - HouseKeeping</p>
                                <p> - Wifi & Parking</p>
                            </div>
                            <div className={roomCSS.BookNow}>
                                <button>Book Now</button>
                                <i className="ri-arrow-right-line"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rooms
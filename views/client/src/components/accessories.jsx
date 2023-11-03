import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/product_style.css";

function Accessories(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div id="container">
            <div id="wrapper">
                <div id="banner-image">
                    <img
                        src={props.img_url}
                        width="300"
                        height="300"
                        loading="lazy"
                        alt="petaccessory"
                        className="banner-image"
                    />
                </div>
                <h3 className="h3 card-title1">{props.nameP}</h3>
                <h3 className="h3 price-title">{props.price}</h3>
                <div
                    style={{
                        "textAlign": "center",
                        "fontSize": "15px",
                        "padding": "10px",
                    }}>
                    <h2>Quantity :
                        <input type="number" name="quantity" id="quantity"
                            style={{ "fontSize": "18px", "borderRadius": "20px", "padding": "10px", "marginLeft": "10px" }} />
                    </h2>

                </div>
                {/* <div id="button-wrapper">
                    <button className="btn" onClick={openPopup}>
                        KNOW MORE
                    </button>
                </div> */}
                <div id="button-wrapper" margin-bottom="20px">
                    <button className="btn " aria-label="add to card" title="Add To Card">
                        ADD TO CART
                    </button>
                    {/* <button className="btn ">
                        BUY NOW
                    </button> */}
                    <button className="btn" onClick={openPopup}>
                        KNOW MORE
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <div className="popup-photo">
                                <img
                                    src={props.img_url}
                                    alt="Product"
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                            <div className="popup-text">
                                <h2 style={{ color: "var(--portland-orange)" }}>{props.nameP}</h2>
                                <p><b>Price:</b> {props.price}</p>
                                <p><b>Description:</b> {props.descp}</p>
                                {/* <p><b>Features:</b> {props.feat} </p>
                                <p><b>Indications:</b> {props.ind}</p> */}
                                {props.feat && <p><b>Features:</b> {props.feat}</p>}
                                {props.ind && <p><b>Indications:</b> {props.ind}</p>}
                            </div>
                        </div>
                        <button className="btn" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Accessories;

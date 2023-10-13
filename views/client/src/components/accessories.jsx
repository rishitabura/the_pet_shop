// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/product_style.css";


// function Accessories(props) {
//     return (
//         <div id="container">
//             <div id="wrapper ">
//                 <div id="banner-image" >
//                     <img src={props.img_url} width="300" height="300" loading="lazy"
//                         alt="petaccesory" className="banner-image" />
//                 </div>
//                 <h3 className="h3 card-title1">
//                     {props.nameP}
//                 </h3>
//                 <h3 className="h3 price-title">
//                     {props.price}
//                 </h3>
//                 <div id="button-wrapper">
//                     <Link to="/modal"> 
//                     <button className="btn" >
//                         KNOW MORE
//                     </button>
//                     </Link>

//                 </div>

//                 <div id="button-wrapper" margin-bottom="20px">
//                     <button className="btn " aria-label="add to card" title="Add To Card">
//                         ADD TO CART
//                     </button>
//                     <button className="btn ">
//                         BUY NOW
//                     </button>
//                 </div>
//             </div>

//         </div>

//     )
// }

// export default Accessories;

// Accessories.js

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
                <div id="button-wrapper">
                    <button className="btn" onClick={openPopup}>
                        KNOW MORE
                    </button>
                </div>
                <div id="button-wrapper" margin-bottom="20px">
                    <button className="btn " aria-label="add to card" title="Add To Card">
                        ADD TO CART
                    </button>
                    <button className="btn ">
                        BUY NOW
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        <div className="popup-content">
                            <h2>{props.nameP}</h2>
                            <p>Price: {props.price}</p>
                            {/* Add more product details here */}
                            <button className="close-button" onClick={closePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accessories;

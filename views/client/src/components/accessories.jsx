/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";


// function Card_PetAcc(props) {
//   return (

//     <div class="product-card">

//       <div class="card-banner img-holder" style={{ "--width": "360", "--height": "360" }}>
//         <img src={props.img_url} width="360" height="360" loading="lazy"
//           alt="petaccesory" class="img-cover default" />

//         <button class="card-action-btn" aria-label="add to card" title="Add To Card">
//           <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
//         </button>
//       </div>

//       <div class="card-content">


//         <h3 class="h3">
//           <a href={props.page_url} class="card-title">{props.title}</a>
//         </h3>

//       </div>

//     </div>
//   )

// }

// export default Card_PetAcc;


function Accessories(props) {
    return (
        <div id="container">
            <div id="wrapper ">
                <div id="banner-image" >
                    <img src={props.img_url} width="300" height="300" loading="lazy"
                        alt="petaccesory" className="banner-image" />
                </div>
                <h3 className="h3 card-title1">
                    {props.nameP}
                </h3>
                <h3 className="h3 price-title">
                    {props.price}
                </h3>
                <div id="button-wrapper">
                    <button className="btn outline" aria-label="add to card" title="Add To Card">
                        ADD TO CART
                    </button>
                    <button className="btn fill">
                        BUY NOW
                    </button>

                </div>
            </div>

        </div>

    )
}

export default Accessories;
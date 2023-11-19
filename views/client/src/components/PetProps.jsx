/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import "../styles/single_product_style.css"
import { MdDeliveryDining } from "react-icons/md";
import { BiBlock } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { LuHeartHandshake } from "react-icons/lu"

function PetProps(props) {

    const [qty, setQty] = useState(1);

    const onQtyChange = (event) => {
        const selectedQty = event.target.value;
        setQty(selectedQty);
    };


    const addToCart = async (event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("wtcptoken");
        if(!token) alert("Please login first");
        else{
        const cost = props.price;
        const name = props.nameP;
        fetch(`http://localhost:5000/customer/cart/add/pets/${props.category}/${props.pid}`, {
            method: "PUT",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                token, qty, cost, name
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success == true) {
                    alert("Added Successfully");
                }
            });
        }

    };

    const listStyle = {
        listStyleType: "circle",
        paddingLeft: "20px",
        fontSize: "2rem",
        fontWeight: "100px",
        textAlign: "left",
    };

    return (
        <div>
            <div className="product-details">
                <div className="product-image">
                    <img
                        src={`data:image/jpeg;base64, ${props.img_url}`}
                        className="product-img"
                    />
                </div>
                <div className="product-info">
                    <h1 className="product-name">
                        {props.nameP}
                    </h1>
                    {/* <p className="product-shop">
                        by {props.shop}
                    </p> */}
                    <p className="product-price">
                       Rs. {props.price} (inclusive of all taxes)
                    </p>
                    <div>
                        <label>Quantity :</label>
                        <select name="qty" id="qty" onChange={onQtyChange} value={qty}>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    {/* <input type="number" name="quantity" id="quantity" /> */}
                    <div className="product-actions">
                        <button className="butt outline" onClick={addToCart}>
                            <b>ADD TO CART</b>
                        </button>
                     
                    </div>
                    <div className="product-feat" style={{ "marginTop": "40px" }}>
                        <div className="icon-con">
                            <LuHeartHandshake size={100} color="#666" />
                            {/* <span className="icon1-label">Icon 1</span> */}

                        </div>
                        <div className="icon-con">
                            <BiBlock size={80} color="#666" />
                            {/* <span className="icon1-label">Icon 2</span> */}

                        </div>
                        <div className="icon-con">
                            <RiSecurePaymentFill size={80} color="#666" />
                            {/* <span className="icon1-label">Icon 3</span> */}
                        </div>

                    </div>
                    <div className="product-feat">
                        <div className="icon-con">
                            <span className="icon1">Friendly</span>

                        </div>
                        <div className="icon-con">
                            <span className="icon1">No Hassle</span>

                        </div>
                        <div className="icon-con">
                            <span className="icon1">Secure Payment</span>

                        </div>

                    </div>
                </div>

            </div>
            {/* <div className="product-description">
                <h2>Availability : {props.avail}</h2>
                <h2>Gender : {props.gen}</h2>
                <h2>Size : {props.size}</h2>
                <h2>Weight : {props.weight}</h2>
                <h2>Height : {props.height}</h2>
                <h2>Color : {props.color}</h2>
            </div> */}

            <div className="product-description">
                <h1>Description :</h1>
                <ul style={listStyle}>
                    <li>Availability : {props.avail}</li>
                    <li>Gender : {props.gender}</li>
                    {/* <li>Size : {props.size}</li> */}
                    <li>Weight : {props.weight}</li>
                    <li>Height : {props.height}</li>
                    <li>Color : {props.color}</li>                </ul>
            </div>

            {/* <div className="product-features">
                <p>Features :</p>
                <ul>
                    <li>
                        Distinct feature - The natural athletes, agile and competitive.
                        The tolerant behavior makes them an extremely lovable pet. One of
                        the most loved pet. In usual, another dog suffers from bad
                        breath, while the golden retrievers are blessed with the soft
                        mouth and smell fresh always.
                    </li>
                    <li>
                        Coat - Water resistant is dense, straight and firm in some it is
                        wavy. Requires regular brushing.
                    </li>
                    <li>
                        Temperament - They are charmers. They are lovable, well-mannered,
                        intelligent dogs. Easy to train because of their gentle behavior.
                        They really know how to please people and other dogs. Get along
                        with children very well.
                    </li>
                    <li>
                        Activity - They love to go for long walks, runs, and some serious
                        exercise.
                    </li>
                </ul>
            </div> */}
            <div className="product-features">
                <h1>Features :</h1>
                {props.features}
                {/* <ul style={listStyle}>
                    <li>Distinct feature - The natural athletes, agile and competitive...</li>
                    <li>Coat - Water resistant is dense, straight and firm in some it is...</li>
                    <li>Temperament - They are charmers. They are lovable, well-mannered...</li>
                    <li>Activity - They love to go for long walks, runs, and some serious...</li>
                </ul> */}
            </div>



        </div>

    );
}

export default PetProps;
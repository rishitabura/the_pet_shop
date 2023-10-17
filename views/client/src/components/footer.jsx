/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/style.css";
import footer from "../assets/img/footer-bg.jpg";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import {BiSolidPhoneCall} from "react-icons/bi";
import {FaLocationDot} from  "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" style={{'backgroundImage': 'url('+footer+')'}}>

        <div className="footer-top section">
            <div className="container">

                <div className="footer-brand">

                    <a href="#" className="logo">Pet Bazaar</a>

                    <p className="footer-text">
                        If you have any question, please contact us at <a href="mailto:support@gmail.com"
                            className="link">petbazaar@gmail.com</a>
                    </p>

                    <ul className="contact-list" id="contact">

                        <li className="contact-item">
                            <ion-icon name="location-outline" aria-hidden="true"><FaLocationDot color="white"/></ion-icon>

                            <address className="address">
                                Pune, Maharashtra
                            </address>
                        </li>

                        <li className="contact-item">
                            <ion-icon name="call-outline" aria-hidden="true"><BiSolidPhoneCall color="white"/></ion-icon>

                            <a href="tel:+16234567891011" className="contact-link">1234567890</a>
                        </li>

                    </ul>

                    <ul className="social-list">

                        <li>
                            <a href="#" className="social-link">
                            < BsFacebook  color="#4267B2" />
                                {/* <ion-icon name="logo-facebook">< BsFacebook/></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                            < AiFillTwitterCircle color="#1DA1F2"/>
                                {/* <ion-icon name="logo-twitter"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                            < BsPinterest color="#c8232c "/>
                                {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                            < BiLogoInstagramAlt color="#d62976"/>
                                {/* <ion-icon name="logo-instagram">< BiLogoInstagramAlt/></ion-icon> */}
                            </a>
                        </li>

                    </ul>

                </div>

                <ul className="footer-list">

                    <li>
                        <p className="footer-list-title">Overview</p>
                    </li>

                    <li>
                        <a href="#" className="footer-link">About us</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Categories</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Contact Us</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">FAQs</a>
                    </li>

                </ul>

                <ul className="footer-list">

                    <li>
                        <p className="footer-list-title">Policies</p>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Terms and Condition</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Shipping Policy</a>
                    </li>

                    <li>
                        <a href="#" className="footer-link">Refund Policy</a>
                    </li>

                </ul>



            </div>
        </div>
    </footer>


    )
}

export default Footer;
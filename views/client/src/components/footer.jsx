/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/style.css";
import footer from "../assets/img/footer-bg.jpg";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

function Footer() {
    return (
        <footer class="footer" style={{'background-image': 'url('+footer+')'}}>

        <div class="footer-top section">
            <div class="container">

                <div class="footer-brand">

                    <a href="#" class="logo">Pet Bazaar</a>

                    <p class="footer-text">
                        If you have any question, please contact us at <a href="mailto:support@gmail.com"
                            class="link">petbazaar@gmail.com</a>
                    </p>

                    <ul class="contact-list" id="contact">

                        <li class="contact-item">
                            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

                            <address class="address">
                                Pune, Maharashtra
                            </address>
                        </li>

                        <li class="contact-item">
                            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                            <a href="tel:+16234567891011" class="contact-link">xxxxxxxxx</a>
                        </li>

                    </ul>

                    <ul class="social-list">

                        <li>
                            <a href="#" class="social-link">
                            < BsFacebook  color="#4267B2" />
                                {/* <ion-icon name="logo-facebook">< BsFacebook/></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                            < AiFillTwitterCircle color="#1DA1F2"/>
                                {/* <ion-icon name="logo-twitter"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                            < BsPinterest color="#c8232c "/>
                                {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                            < BiLogoInstagramAlt color="#d62976"/>
                                {/* <ion-icon name="logo-instagram">< BiLogoInstagramAlt/></ion-icon> */}
                            </a>
                        </li>

                    </ul>

                </div>

                <ul class="footer-list">

                    <li>
                        <p class="footer-list-title">Overview</p>
                    </li>

                    <li>
                        <a href="#" class="footer-link">About us</a>
                    </li>

                    <li>
                        <a href="#" class="footer-link">Categories</a>
                    </li>

                    <li>
                        <a href="#" class="footer-link">Contact Us</a>
                    </li>

                    <li>
                        <a href="#" class="footer-link">FAQs</a>
                    </li>

                </ul>

                <ul class="footer-list">

                    <li>
                        <p class="footer-list-title">Policies</p>
                    </li>

                    <li>
                        <a href="#" class="footer-link">Terms and Condition</a>
                    </li>

                    <li>
                        <a href="#" class="footer-link">Shipping Policy</a>
                    </li>

                    <li>
                        <a href="#" class="footer-link">Refund Policy</a>
                    </li>

                </ul>



            </div>
        </div>
    </footer>


    )
}

export default Footer;
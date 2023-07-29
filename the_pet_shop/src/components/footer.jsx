import "../styles/home.css";
import "../styles/common.css";


function Footer() {
    return (
        <footer>
            <div class="content">
                <div class="top">
                    <div class="logo-details">
                        <a href="index.html"><img src="img/logo5.png" style={{ width: 'auto', height: '100px' }} /></a>
                    </div>
                    <div class="media-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <br />
                <div class="link-boxes">
                    <ul class="box">
                        <li class="link_name">Policies</li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return and Exchange Policy</a></li>
                    </ul>
                    <ul class="box">
                        <li class="link_name">Overview</li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Collection</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <ul class="box input-box">
                        <li class="link_name">Subscribe</li>
                        <li><input type="email" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
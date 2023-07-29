import "../styles/home.css";
import "../styles/common.css";


function Navbar() {
    return (

        <nav>
            <div class="wrapper">
                <ul class="nav-links">
                  
                </ul>
                <div class="logo">
                    <a href="index.html">Pet Bazaar</a>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />
                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#" class="desktop-item">Dropdown Menu <i class="fa fa-angle-down"></i></a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" class="mobile-item">Dropdown Menu</label>
                        <ul class="drop-menu">
                            <li><a href="#">Drop menu 1</a></li>
                            <li><a href="#">Drop menu 2</a></li>
                            <li><a href="#">Drop menu 3</a></li>
                            <li><a href="#">Drop menu 4</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="desktop-item">Shop <i class="fa fa-angle-down"></i></a>
                        <input type="checkbox" id="showMega" />
                        <label for="showMega" class="mobile-item">Shop</label>
                        <div class="mega-box">
                            <div class="content">
                                {/* <!-- <div class="row">
                    <img src="img.jpg" alt=""/>
                  </div> --> */}
                                <div class="row">
                                    <header>Farm Animals</header>
                                    <ul class="mega-links" style={{ 'list-style-image': 'url(./img/pawicon.jpeg)' }}>
                                        <li><a href="#">Polaroids</a></li>
                                        <li><a href="#">Candles</a></li>
                                        <li><a href="#">Coasters</a></li>
                                        <li><a href="#">Stickers</a></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Domestic Pets</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Necklaces</a></li>
                                        <li><a href="#">Braclets</a></li>
                                        <li><a href="#">Earrings</a></li>
                                        <li><a href="#">Rings</a></li>
                                        <li><a href="#">Aklets</a></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <header>Pet Care</header>
                                    <ul class="mega-links">
                                        <li><a href="#">Scrunchies</a></li>
                                        <li><a href="#">Bows</a></li>
                                        {/* <!-- <li><a href="#">Privacy Seal</a></li>
                                        <li><a href="#">Website design</a></li> --> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <div class="header-item item-right">
                            <a href="#"><i class="fas fa-user"></i></a>
                            {/* <!-- <a href="#"><i class="fas fa-sign-in-alt"></i></a> --> */}
                            <a href="#"><i class="fas fa-shopping-cart"></i></a>

                            <div class="mobile-menu-trigger">
                                <span></span>
                            </div>
                        </div>
                    </li>
                </ul>
                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
            </div>
        </nav>
    )

}

export default Navbar;
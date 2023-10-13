import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Accessories from "../components/accessories";
import bags from "../assets/img/bags.jpg";


function Cat_Products() {
  return (
    <div>
      <Navbar />

      <main>
        <article>
          <br />
          <br />
          <section className="section category" aria-label="category">
            <h2 className="h2 section-title">
              <span className="span">Pet</span> Products
            </h2>
            <br />
            <div className="main">
              <br />
              <br />
              {/* <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product1"><img src={require("../assets/img/bags.jpg")} alt="" /></a>
                  </div>
                  <h3>Compostable Poop Bags</h3>
                  <h3>Price: ₹400 - ₹500</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div>

              <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product2"><img src={require("../assets/img/house.jpg")} alt="" /></a>
                  </div>
                  <h3>Plastic Dog Kennel</h3>
                  <h3>Price: ₹1,000 - ₹5,000</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div>

              <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product3"><img src={require("../assets/img/feeder.jpg")} alt="" /></a>
                  </div>
                  <h3>Automatic Pet Feeder</h3>
                  <h3>Price: ₹300 - ₹2,000</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div>

              <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product4"><img src={require("../assets/img/rope.jpg")} alt="" /></a>
                  </div>
                  <h3>Dog Traction Rope</h3>
                  <h3>Price: ₹100 - ₹500</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div>

              <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product5"><img src={require("../assets/img/food.avif")} alt="" /></a>
                  </div>
                  <h3>Dog & Cat Food</h3>
                  <h3>Price: ₹500 - ₹3,000</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div>

              <div id="container">
                <div id="wrapper">
                  <div id="banner-image">
                    <a href="http://localhost:3000/product6"><img src={require("../assets/img/brush.webp")} alt="" /></a>
                  </div>
                  <h3>Dog & Cat Brush</h3>
                  <h3>Price: ₹200 - ₹800</h3>
                </div>
                <div id="button-wrapper">
                  <button className="btn outline">ADD TO CART</button>
                  <br />
                  <button className="btn fill">BUY NOW</button>
                </div>
              </div> */}

              <ul className="grid-list1">
                <li>
                  <Accessories
                    img_url={bags}
                    nameP="Compostable Poop Bags"
                    price="Price: ₹400 - ₹500"
                  />

                </li>
              </ul>

              <ul>
                <li>
                  <Accessories
                    img_url={bags}
                    nameP="Compostable Poop Bags"
                    price="Price: ₹400 - ₹500"
                  />

                </li>
              </ul>

              <ul>
                <li>
                  <Accessories
                    img_url={bags}
                    nameP="Compostable Poop Bags"
                    price="Price: ₹400 - ₹500"
                  />

                </li>
              </ul>
              <ul>

                <li>
                  <Accessories
                    img_url={bags}
                    nameP="Compostable Poop Bags"
                    price="Price: ₹400 - ₹500"
                  />

                </li>
              </ul>
              <ul>


                <li>
                  <Accessories
                    img_url={bags}
                    nameP="Compostable Poop Bags"
                    price="Price: ₹400 - ₹500"
                  />

                </li>
              </ul>
            </div>
          </section>

          <section
            class="cta has-bg-image"
            aria-label="cta"
            style={{ "background-image": "url(" + ctabg + ")" }}
          >
            <div class="container">
              <figure class="cta-banner">
                <img
                  src={ctabanner}
                  width="900"
                  height="660"
                  loading="lazy"
                  alt="cat"
                  class="w-100"
                />
              </figure>

              <div class="cta-content">
                <h1 class="h1"> Find your Perfect Pet</h1>

                <h2 class="h2 section-title">Care of Your Little Pets</h2>

                <p class="section-text"></p>

                <a href="../pages/about.html" target="_blank" class="btn">
                  About us
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default Cat_Products;

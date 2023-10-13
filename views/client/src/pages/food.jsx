import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Accessories from "../components/accessories";
import bags from "../assets/img/bags.jpg";
import house from "../assets/img/house.jpg"


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
                    img_url={house}
                    nameP="Plastic Dog Kennel"
                    price="Price: ₹1,000 - ₹5,000"
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

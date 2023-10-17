import React from "react";
import "../styles/style.css";
import "../styles/single_product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

function single_product() {
  return (
    <div>
      <Navbar />

      <main>
        <article>
          <br />
          <br />
          <br />
          <br />
          <h2 className="h2 section-title">
            <span className="span">Product</span> Description
          </h2>

          <div>
            <img
              className="product"
              src={require("../assets/img/brush.webp")}
              alt=""
              srcset=""
            />
            <div id="info">
              <p>Availability: 1,000 items</p>
              <h2>Pet Grooming Shedding Brush for Dogs and Cats</h2>
              <h2>₹ 208</h2>
              <br />
              <p>About this item</p>
              <ul>
                <li>
                  Clean Pets, Clean House. Depets cat & dog brush for shedding
                  can easily remove loose hair, shedding mats, tangled hair,<br/>
                  dander and dirt of your lovely pet, which not only keep your
                  pet clean, but also provide you with a clean and hygienic home
                  environment.
                </li>
              </ul>
              <br />
              <h4>Barcode: B08FJ655HL</h4>
              <h4>Weight: 100 g</h4>
              <h4>Tags: cats, dogs</h4>
              <h4>Collections: For Cats, For Dogs</h4>
              <br />
              <h2>Quantity:</h2>
              <input type="number" name="quantity" id="quantity" />
              <br />
              <br />
            </div>
            <div id="wrapper2">
              <button className="btn outline">ADD TO CART</button>
              <button className="btn fill">BUY NOW</button>
            </div>
          </div>

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

      <Footer />
    </div>
  );
}

export default single_product;

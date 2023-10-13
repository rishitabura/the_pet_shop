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
              src={require("../assets/img/food.avif")}
              alt=""
              srcset=""
            />
            <div id="info">
              <p>Availability: 300 items</p>
              <h2>Adult Dry Dog and Cat Food, Chicken & Vegetable</h2>
              <h2>₹ 1,390</h2>
              <br />
              <p>About this item</p>
              <ul>
                <li>
                  Complete & balanced dog food, a perfect food for adult dogs
                </li>
                <li>
                  Contains 20% crude Protein, 10% crude Fat, and 5% crude Fibre
                </li>
                <li>
                  Provides strong muscles, bones & teeth and healthier & shinier
                  coat
                </li>
                <li>
                  Dog food that also promotes Digestive Health and supports
                  Natural Defences
                </li>
                <li>
                  Developed by experts at the Waltham Centre for Pet Nutrition
                </li>
              </ul>
              <br />
              <h4>Barcode: B0BR5QYX73</h4>
              <h4>Weight: 5.5 kg</h4>
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

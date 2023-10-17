import React from "react";
// import "../styles/style.css";
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
              className="product1"
              src={require("../assets/img/bags.jpg")}
              alt=""
              srcset=""
            />
            <div id="info">
              <p>Availability: 205 items</p>
              <h2>
                Pets N Bags Environment Friendly Biodegradable Dog Waste Bags
              </h2>
              <h2>₹ 299</h2>
              <br />
              <p>About this item</p>
              <ul>
                <li>This product will be an excellent pick for you</li>
                <li>The product is Durable</li>
                <li>Come with Proper Safe Packaging</li>
              </ul>
              <br />
              <h4>Barcode: B00N3K01LC</h4>
              <h4>Weight: 576 g</h4>
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
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default single_product;

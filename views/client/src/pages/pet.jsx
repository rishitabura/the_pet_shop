import React from "react";
// import "../styles/style.css";
import "../styles/single_product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

function Pet() {
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
            <span className="span">Pet</span> Description
          </h2>

          <div>
            <img
              className="product1"
              src={require("../assets/img/gdps.webp")}
              alt=""
              srcset=""
            />
            <div id="info1">
              <p>Availability: 2 Puppies</p>
              <h2>Golden Retriever Puppies</h2>
              <h2>₹ 15,000 - ₹ 20,000</h2>
              <br />
              <p>Description</p>
              <h4>Gender: Male, Female (Both Available)</h4>
              <h4>Breed: Sporting</h4>
              <h4>Weight: 36 kg</h4>
              <h4>Height: 61 cm</h4>
              <h4>Color: Golden Fawn</h4><br />

              <p>Features :</p>
              <ul>
                <li>
                  Distinct feature - The natural athletes, agile and
                  competitive. The tolerant behavior makes them an extremely
                  lovable pet.<br/> One of the most loved pet. In usual, another dog
                  suffers from bad breath, while the golden retrievers are
                  blessed with the soft mouth and smell fresh always.
                </li>
                <li>
                  Coat - Water resistant is dense, straight and firm in some it
                  is wavy. Requires regular brushing.
                </li>
                <li>
                  Temperament - They are charmers. They are lovable,
                  well-mannered, intelligent dogs. Easy to train because of<br/>
                  their gentle behavior. They really know how to please people
                  and other dogs. Get along with children very well.
                </li>
                <li>
                  Activity - They love to go for long walks, runs, and some
                  serious exercise.
                </li>
              </ul>
              <br />

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

export default Pet;

// import React from "react";
// // import "../styles/style.css";
// import "../styles/single_product_style.css";
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import ctabg from "../assets/img/cta-bg.jpg";
// import ctabanner from "../assets/img/cta-banner.png";

// function Pet() {
//   return (
//     <div>
//       <Navbar />

//       <main>
//         <article>
//           <br />
//           <br />
//           <br />
//           <br />
//           <h2 className="h2 section-title">
//             <span className="span">Pet</span> Description
//           </h2>

//           <div>
//             <img
//               className="product1"
//               src={require("../assets/img/gdps.webp")}
//               alt=""
//               srcset=""
//             />
//             <div id="info1">
//               <p>Availability: 2 Puppies</p>
//               <h2>Golden Retriever Puppies</h2>
//               <h2>₹ 15,000 - ₹ 20,000</h2>
//               <br />
//               <p>Description</p>
//               <h4>Gender: Male, Female (Both Available)</h4>
//               <h4>Breed: Sporting</h4>
//               <h4>Weight: 36 kg</h4>
//               <h4>Height: 61 cm</h4>
//               <h4>Color: Golden Fawn</h4><br />

//               <p>Features :</p>
//               <ul>
//                 <li>
//                   Distinct feature - The natural athletes, agile and
//                   competitive. The tolerant behavior makes them an extremely
//                   lovable pet.<br/> One of the most loved pet. In usual, another dog
//                   suffers from bad breath, while the golden retrievers are
//                   blessed with the soft mouth and smell fresh always.
//                 </li>
//                 <li>
//                   Coat - Water resistant is dense, straight and firm in some it
//                   is wavy. Requires regular brushing.
//                 </li>
//                 <li>
//                   Temperament - They are charmers. They are lovable,
//                   well-mannered, intelligent dogs. Easy to train because of<br/>
//                   their gentle behavior. They really know how to please people
//                   and other dogs. Get along with children very well.
//                 </li>
//                 <li>
//                   Activity - They love to go for long walks, runs, and some
//                   serious exercise.
//                 </li>
//               </ul>
//               <br />

//               <br />
//               <h2>Quantity:</h2>
//               <input type="number" name="quantity" id="quantity" />
//               <br />
//               <br />
//             </div>
//             <div id="wrapper2">
//               <button className="btn outline">ADD TO CART</button>
//               <button className="btn fill">BUY NOW</button>
//             </div>
//           </div>

         
//         </article>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Pet;


import React from "react";
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
          <div className="product-details">
            <div className="product-image">
              <img
                className="product-img"
                src={require("../assets/img/gdps.webp")}
                alt=""
              />
            </div>
            <div className="product-info">
              <h2 className="product-name">Golden Retriever Puppies</h2>
              <p className="product-price">₹ 15,000 - ₹ 20,000</p>
              <div className="product-actions">
                <input type="number" name="quantity" id="quantity" />
                <button className="btn outline">ADD TO CART</button>
                <button className="btn fill">BUY NOW</button>
              </div>
            </div>
          </div>

          <h2 className="section-title">
            <span className="span">Pet</span> Description
          </h2>

          <div className="product-description">
            <p>Availability: 2 Puppies</p>
            <p>Description</p>
            <h4>Gender: Male, Female (Both Available)</h4>
            <h4>Breed: Sporting</h4>
            <h4>Weight: 36 kg</h4>
            <h4>Height: 61 cm</h4>
            <h4>Color: Golden Fawn</h4>
          </div>

          <div className="product-features">
            <p>Features :</p>
            <ul>
              <li>
                Distinct feature - The natural athletes, agile and competitive.
                The tolerant behavior makes them an extremely lovable pet. One of
                the most loved pet. In usual, another dog suffers from bad
                breath, while the golden retrievers are blessed with the soft
                mouth and smell fresh always.
              </li>
              <li>
                Coat - Water resistant is dense, straight and firm in some it is
                wavy. Requires regular brushing.
              </li>
              <li>
                Temperament - They are charmers. They are lovable, well-mannered,
                intelligent dogs. Easy to train because of their gentle behavior.
                They really know how to please people and other dogs. Get along
                with children very well.
              </li>
              <li>
                Activity - They love to go for long walks, runs, and some serious
                exercise.
              </li>
            </ul>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default Pet;

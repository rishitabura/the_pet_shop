/* eslint-disable react/jsx-pascal-case */
import React from "react";
import  { useState } from 'react';
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


import GermanShepherd from "../assets/img/German-Shepherd-Dog.jpg"
import FrenchBulldogs from "../assets/img/French-Bulldogs.jpg";
import GoldenRetrievers from "../assets/img/Golden-Retrievers.jpg";
import PoodlesDog from "../assets/img/Poodles-dog.jpg";
import RottweilersDog from "../assets/img/Rottweilers-dog.jpg";
import BeaglesDog from "../assets/img/Beagles-dog.jpg";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";
import cat1 from "../assets/img/cat1.jpeg";
import cat2 from "../assets/img/cat2.jpg";
import cat3 from "../assets/img/cat3.jpg";
import cat4 from "../assets/img/cat4.jpg";
import cat5 from "../assets/img/cat5.jpg";
import ducks from "../assets/img/ducks.jpg";
import horses from "../assets/img/horses.jpg";


import cows from "../assets/img/cows.jpeg";
import hens from "../assets/img/hens.jpg";
import goat from "../assets/img/goat.jpeg";



import { Card_TopCat2 } from "../components/card_topCategories";



// import Card from "../components/card_topCategories";
function Animals() {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div>

      <Navbar />

      <main>
        <article>
          <br></br>
          <br></br>

          <section className="section category" aria-label="category">
            <div className="container">

              <h2 className="h2 section-title" >
                <span className="span">Dogs</span> Breads
              </h2>

              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {GermanShepherd}
                 title = "German Shepherd Dog"
                 page_url = "/pet"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {FrenchBulldogs}
                 title = "French Bull Dog"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {GoldenRetrievers}
                 title = "Golden Retrievers Dog"
                 page_url = "/goldenRetrieversDog"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {PoodlesDog}
                 title = "Poodles Dog"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {RottweilersDog}
                 title = "Rottweilers Dog"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {BeaglesDog}
                 title = "Beagles Dog"
                 page_url = "#"
                 />
               
                </li>

              </ul>

            </div>
          </section>


          <section className="section category" aria-label="category">
            <div className="container">

              <h2 className="h2 section-title" >
                <span className="span">Cats</span> Breads
              </h2>

              <ul className="has-scrollbar">

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cat1}
                 title = "Cats"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cat2}
                 title = "Dogs"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cat3}
                 title = "Rabbits"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cat4}
                 title = "Farm Animals"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cat5}
                 title = "Birds"
                 page_url = "#"
                 />
               
                </li>

              </ul>

            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">

              <h2 className="h2 section-title" >
                <span className="span">Farm</span> Animals
              </h2>

              <ul className="has-scrollbar">

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {cows}
                 title = "Cows"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {hens}
                 title = "Hens"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {goat}
                 title = "Goat"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {ducks}
                 title = "Ducks"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {horses}
                 title = "Horses"
                 page_url = "#"
                 />
               
                </li>

              </ul>

            </div>
          </section>

          <section class="cta has-bg-image" aria-label="cta" style={{ "background-image": "url("+ctabg+")" }}>
            <div class="container">

              <figure class="cta-banner">
                <img src={ctabanner} width="900" height="660" loading="lazy" alt="cat" class="w-100" />
              </figure>

              <div class="cta-content">
                <h1 class="h1"> Find your Perfect Pet</h1>

                <h2 class="h2 section-title">Care of Your Little Pets</h2>

                <p class="section-text">

                </p>

                <a href="../pages/about.html" target="_blank" class="btn">About us</a>

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

export default Animals;


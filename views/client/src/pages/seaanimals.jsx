/* eslint-disable react/jsx-pascal-case */
import React from "react";
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


import cows from "../assets/img/cows.jpeg";
import hens from "../assets/img/hens.jpg";
import goat from "../assets/img/goat.jpeg";



import { Card_TopCat2 } from "../components/card_topCategories";
import catimg from "../assets/img/cat.jpg";
import dogimg from "../assets/img/dog.jpg";
import rabbitimg from "../assets/img/rabbit.jpeg";
import farm_animalimg from "../assets/img/parrot.jpg";
import birdimg2 from "../assets/img/parrot.jpg";

// import Card from "../components/card_topCategories";

function SeaAnimals() {
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
                 page_url = "#"
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
                 page_url = "#"
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
                 img_url = {catimg}
                 title = "Cats"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {dogimg}
                 title = "Dogs"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {rabbitimg}
                 title = "Rabbits"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {farm_animalimg}
                 title = "Farm Animals"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {birdimg2}
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
                 img_url = {farm_animalimg}
                 title = "Farm Animals"
                 page_url = "#"
                 />
                </li>

                <li className="scrollbar-item">
                <Card_TopCat2
                 img_url = {birdimg2}
                 title = "Birds"
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

export default SeaAnimals;


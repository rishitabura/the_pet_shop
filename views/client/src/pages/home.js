/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "../styles/style.css";
import bg2 from "../assets/img/bg2.jpg";

import Card_TopCat from "../components/card_topCategories";
import animalsimg1 from "../assets/img/offer-banner-1.jpg";
import birdsimg1 from "../assets/img/offer-banner-3.jpg";
import sea_animalsimg1 from "../assets/img/fish-banner2.jpg";

import Card_PetAcc from "../components/card_petAccessories";
import petfoodimg1 from "../assets/img/pet-food.png";
import petgroomingimg1 from "../assets/img/pet-grooming.png";
import petessentialsimg1 from "../assets/img/pet-essentials.png";
import petshelterimg1 from "../assets/img/shelter-banner1.png";

import { Card_TopCat2 } from "../components/card_topCategories";
import catimg from "../assets/img/cat.jpg";
import dogimg from "../assets/img/dog.jpg";
import rabbitimg from "../assets/img/rabbit.jpeg";
import farm_animalimg from "../assets/img/parrot.jpg";
import birdimg2 from "../assets/img/parrot.jpg";
// import pet-food from "assets/img/pet-food.png";

import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <div>

      <Navbar />

      <main>
        <article>


          <section class="section hero has-bg-image" id="home" aria-label="home"
            style={{ 'background-image': 'url('+bg2+')' }}>
            <div class="container">

            </div>
          </section>




          <section class="section offer" id="pet-categories" aria-label="offer">
            <div class="container">
              <h2 class="h2 section-title">
                <span class="span">Top</span> categories
              </h2>
              <ul class="grid-list">

                <li>
                  <Card_TopCat
                  img_url = {animalsimg1}
                  subtitle = "Animals"
                  page_url = "../pages/animals.js"
                  />
                </li>

                <li>
                <Card_TopCat
                  img_url = {birdsimg1}
                  subtitle = "Birds"
                  page_url = "#"
                  />
                </li>

                <li>
                <Card_TopCat
                  img_url = {sea_animalsimg1}
                  subtitle = "Sea Animals"
                  page_url = "#"
                  />
                </li>


              </ul>

            </div>
          </section>


          <section class="section product" id="shop" aria-label="product">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Pet</span> Accessories
              </h2>

              <ul class="grid-list">

                <li>
                  <Card_PetAcc img_url = {petfoodimg1} title = "Pet Food" page_url = "#" />
                </li>

                <li>
                <Card_PetAcc
                   img_url = {petgroomingimg1}
                   title = "Pet Grooming"
                   page_url = "#"
                  />
                </li>

                <li>
                  <Card_PetAcc
                   img_url = {petessentialsimg1}
                   title = "Pet Essentials"
                   page_url = "#"
                  />
                </li>

                <li>
                <Card_PetAcc
                   img_url = {petshelterimg1}
                   title = "Pet Shelter"
                   page_url = "#"
                  />
                </li>


              </ul>

            </div>
          </section>

          <section class="section category" aria-label="category">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Top</span> categories
              </h2>

              <ul class="has-scrollbar">

                <li class="scrollbar-item">
                <Card_TopCat2
                 img_url = {catimg}
                 title = "Cats"
                 page_url = "#"
                 />
                </li>

                <li class="scrollbar-item">
                <Card_TopCat2
                 img_url = {dogimg}
                 title = "Dogs"
                 page_url = "#"
                 />
                </li>

                <li class="scrollbar-item">
                <Card_TopCat2
                 img_url = {rabbitimg}
                 title = "Rabbits"
                 page_url = "#"
                 />
                </li>

                <li class="scrollbar-item">
                <Card_TopCat2
                 img_url = {farm_animalimg}
                 title = "Farm Animals"
                 page_url = "#"
                 />
                </li>

                <li class="scrollbar-item">
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

                <a href="./pages/about.html" target="_blank" class="btn">About us</a>

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

export default Home;


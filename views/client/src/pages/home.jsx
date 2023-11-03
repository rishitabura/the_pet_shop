/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
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
import farmanimals2 from "../assets/img/farmanimals2.jpg";
import farmimg1 from "../assets/img/farmanimal.png";
// import pet-food from "assets/img/pet-food.png";



import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
// import Navbar1 from "../components/Navbar/Navbar";



function Home() {
  return (
    <div>

      <Navbar />

      <main>
        <article>


          <section className="section hero has-bg-image" id="home" aria-label="home"
            style={{ 'backgroundImage': 'url('+bg2+')' }}>
            <div className="container">

            </div>
          </section>




          <section className="section offer" id="pet-categories" aria-label="offer">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Top</span> categories
              </h2>
              <ul className="grid-list">

                <li>
                  <Card_TopCat
                    img_url={animalsimg1}
                    subtitle="Home Pets"
                    page_url="pets/tags/HomePet"
                  />
                </li>

                <li>
                <Card_TopCat
                  img_url = {birdsimg1}
                  subtitle = "Birds"
                  page_url = "pets/Birds"
                  />
                </li>

                <li>
                <Card_TopCat
                  img_url = {farmimg1}
                  subtitle = "Farm Animals"
                  page_url = "pets/tags/FarmAnimals"
                  />
                </li>

                {/* <li>
                  <Card_TopCat
                    img_url={sea_animalsimg1}
                    subtitle="Sea Animals"
                    page_url="pets/SeaAnimals"
                  />
                </li> */}


              </ul>

            </div>
          </section>


          <section className="section product" id="shop" aria-label="product">
            <div className="container">

              <h2 className="h2 section-title">
                <span className="span">Pet</span> Accessories
              </h2>

              <ul className="grid-list">

                <li>
                  <Card_PetAcc 
                  img_url = {petfoodimg1} 
                  title = "Pet Food" 
                  page_url = "products/Food"/>
                </li>

                <li>
                <Card_PetAcc
                   img_url = {petessentialsimg1}
                   title = "Accessories"
                   page_url = "products/Accessories"
                  />
                </li>

                <li>
                  <Card_PetAcc
                   img_url = {petgroomingimg1}
                   title = "Hygiene"
                   page_url = "products/Hygiene"
                  />
                </li>

                <li>
                <Card_PetAcc
                   img_url = {petshelterimg1}
                   title = "Shelter"
                   page_url = "products/Shelter"
                  />
                </li>


              </ul>

            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">

              <h2 className="h2 section-title">
                <span className="span">Top</span> categories
              </h2>

              <ul className="has-scrollbar">

                <li className="scrollbar-item">
                  <Card_TopCat2
                    img_url={catimg}
                    title="Cats"
                    page_url="/pets/Cats"
                  />
                </li>

                <li className="scrollbar-item">
                  <Card_TopCat2
                    img_url={dogimg}
                    title="Dogs"
                    page_url="/pets/Dogs"
                  />
                </li>

                <li className="scrollbar-item">
                  <Card_TopCat2
                    img_url={rabbitimg}
                    title="Rabbits"
                    page_url="/pets/Rabbits"
                  />
                </li>

                <li className="scrollbar-item">
                  <Card_TopCat2
                    img_url={farmanimals2}
                    title="Farm Animals"
                    page_url="/pets/tags/FarmAnimals"
                  />
                </li>

                <li className="scrollbar-item">
                  <Card_TopCat2
                    img_url={birdimg2}
                    title="Birds"
                    page_url="/pets/Birds"
                  />

                </li>

              </ul>

            </div>
          </section>

          <section className="cta has-bg-image" aria-label="cta" style={{ "backgroundImage": "url("+ctabg+")" }}>
            <div className="container">

              <figure className="cta-banner">
                <img src={ctabanner} width="900" height="660" loading="lazy" alt="cat" className="w-100" />
              </figure>

              <div className="cta-content">
                <h1 className="h1"> Find your Perfect Pet</h1>

                <h2 className="h2 section-title">Care of Your Little Pets</h2>

                <p className="section-text">

                </p>

                {/* <a href="aboutus.js" className="btn">About us</a> */}
                <Link to="/about" className="btn"> About us</Link>

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


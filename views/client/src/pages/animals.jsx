import React from "react";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import CatImg from "../assets/img/cat.jpg";
import DogImg from "../assets/img/dog.jpg";
import RabbitImg from "../assets/img/rabbit.jpeg";
import ParrotImg from "../assets/img/parrot.jpg";

function Animals() {
  return (
    <div>

      <Navbar />

      <main>
        <article>

          <section class="section category" aria-label="category">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Dog</span> Breads
              </h2>

              <ul class="has-scrollbar">

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={CatImg} width="330" height="300" loading="lazy" alt="Cat Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Cats</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src= {DogImg} width="330" height="300" loading="lazy" alt="Cat Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Dogs</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={RabbitImg} width="330" height="300" loading="lazy" alt="Dog Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Rabbits</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy" alt="Dog Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Farm animals</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>

              </ul>

            </div>
          </section>

          <section class="section category" aria-label="category">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Cats</span> Breads
              </h2>

              <ul class="has-scrollbar">

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={CatImg} width="330" height="300" loading="lazy" alt="Cat Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Cats</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={DogImg} width="330" height="300" loading="lazy" alt="Cat Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Dogs</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={RabbitImg} width="330" height="300" loading="lazy" alt="Dog Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Rabbits</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy" alt="Dog Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Farm animals</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src={ParrotImg} width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>

              </ul>

            </div>
          </section>
          <section class="section category" aria-label="category">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Rabbits</span> Breads
              </h2>

              <ul class="has-scrollbar">

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/cat.jpg" width="330" height="300" loading="lazy" alt="Cat Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Cats</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/dog.jpg" width="330" height="300" loading="lazy" alt="Cat Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Dogs</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/rabbit.jpeg" width="330" height="300" loading="lazy" alt="Dog Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Rabbits</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy" alt="Dog Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Farm animals</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>

              </ul>

            </div>
          </section>
          <section class="section category" aria-label="category">
            <div class="container">

              <h2 class="h2 section-title">
                <span class="span">Farm</span> Animals
              </h2>

              <ul class="has-scrollbar">

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/cat.jpg" width="330" height="300" loading="lazy" alt="Cat Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Cats</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/dog.jpg" width="330" height="300" loading="lazy" alt="Cat Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Dogs</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/rabbit.jpeg" width="330" height="300" loading="lazy" alt="Dog Food"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Rabbits</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy" alt="Dog Toys"
                        class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Farm animals</a>
                    </h3>

                  </div>
                </li>

                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>
                <li class="scrollbar-item">
                  <div class="category-card">

                    <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                      <img src="../assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                        alt="Dog Sumpplements" class="img-cover"/>
                    </figure>

                    <h3 class="h3">
                      <a href="#" class="card-title">Birds</a>
                    </h3>

                  </div>
                </li>

              </ul>

            </div>
          </section>

          <section class="cta has-bg-image" aria-label="cta" style="background-image: url('../assets/images/cta-bg.jpg')">
            <div class="container">

              <figure class="cta-banner">
                <img src="../assets/images/cta-banner.png" width="900" height="660" loading="lazy" alt="cat" class="w-100"/>
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


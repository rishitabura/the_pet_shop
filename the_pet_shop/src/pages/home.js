// /* eslint-disable jsx-a11y/img-redundant-alt */

// import "../styles/home.css";
// import "../styles/common.css";
// import bg from "../assets/img/bg2.jpeg";
// import cat1 from "../assets/img/category-1.jpg";
// import cat2 from "../assets/img/category-2.jpg";
// import cat3 from "../assets/img/category-3.jpg";
// import cat4 from "../assets/img/category-4.jpg";
// import cat5 from "../assets/img/category-5.jpg";
// import Navbar from "../components/Navbar";


// function Home() {
//     return (
//         <html>

//             <head>
//                 <meta charset="UTF-8" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>The Pet Shop</title>
//                 <link href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" rel="stylesheet" />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
//                     rel="stylesheet" />
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
//             </head>

//             <body>

//                 <header>
//                     <Navbar />

//                 </header>

//                 <div class="image-background">
//                     <div class="image-container">
//                         <img src={bg} alt="Backgrond Image" style={{ width: '100%' }} />
//                     </div>
//                 </div>


//                 <section class="section category" aria-label="category">
//                     <div class="container">

//                         <h2 class="h2 section-title">
//                             <span class="span">Top</span> categories
//                         </h2>

//                         <ul class="has-scrollbar">

//                             <li class="scrollbar-item">
//                                 <div class="category-card">

//                                     <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
//                                         <img src= {cat1} width="330" height="300" loading="lazy" alt="Cat Food"
//                                             class="img-cover"/>
//                                     </figure>

//                                     <h3 class="h3">
//                                         <a href="#" class="card-title">Cat Food</a>
//                                     </h3>

//                                 </div>
//                             </li>

//                             <li class="scrollbar-item">
//                                 <div class="category-card">

//                                     <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
//                                         <img src={cat2} width="330" height="300" loading="lazy" alt="Cat Toys"
//                                             class="img-cover"/>
//                                     </figure>

//                                     <h3 class="h3">
//                                         <a href="#" class="card-title">Cat Toys</a>
//                                     </h3>

//                                 </div>
//                             </li>

//                             <li class="scrollbar-item">
//                                 <div class="category-card">

//                                     <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
//                                         <img src={cat3} width="330" height="300" loading="lazy" alt="Dog Food"
//                                             class="img-cover"/>
//                                     </figure>

//                                     <h3 class="h3">
//                                         <a href="#" class="card-title">Dog Food</a>
//                                     </h3>

//                                 </div>
//                             </li>

//                             <li class="scrollbar-item">
//                                 <div class="category-card">

//                                     <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
//                                         <img src={cat4} width="330" height="300" loading="lazy" alt="Dog Toys"
//                                             class="img-cover"/>
//                                     </figure>

//                                     <h3 class="h3">
//                                         <a href="#" class="card-title">Dog Toys</a>
//                                     </h3>

//                                 </div>
//                             </li>

//                             <li class="scrollbar-item">
//                                 <div class="category-card">

//                                     <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
//                                         <img src={cat5} width="330" height="300" loading="lazy"
//                                             alt="Dog Sumpplements" class="img-cover"/>
//                                     </figure>

//                                     <h3 class="h3">
//                                         <a href="#" class="card-title">Dog Sumpplements</a>
//                                     </h3>

//                                 </div>
//                             </li>

//                         </ul>

//                     </div>
//                 </section>







//             </body>

//         </html>
//     );
// }

// export default Home;


import React from "react";
import "../styles/style.css";
// import pet-food from "assets/img/pet-food.png";

import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>

            <Navbar />

            <main>
    <article>


      <section class="section hero has-bg-image" id="home" aria-label="home"
        style="background-image: url('./assets/img/bg2.jpg')">
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
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('./assets/images/offer-banner-1.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle"></p>

                <h3 class="h3 card-title">
                  Animals <span class="span"></span>
                </h3>

                <a href="./pages/animals.html" class="btn"> More</a>

              </div>
            </li>

            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('./assets/images/offer-banner-3.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle"></p>

                <h3 class="h3 card-title">
                  Birds <span class="span"></span>
                </h3>

                <a href="#" class="btn">More</a>

              </div>
            </li>
            
            <li>
              <div class="offer-card has-bg-image img-holder"
                style="background-image: url('./assets/img/fish-banner2.jpg'); --width: 540; --height: 374;">

                <p class="card-subtitle"></p>

                <h3 class="h3 card-title">
                  Sea <span class="span"> Animals </span>
                </h3>

                <a href="#" class="btn">More</a>

              </div>
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
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="./assets/img/pet-food.png" width="360" height="360" loading="lazy"
                    alt="Commodo leo sed porta" class="img-cover default">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">


                  <h3 class="h3">
                    <a href="#" class="card-title">Pet Food</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="./assets/img/pet-grooming.png" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover default">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Pet Grooming</a>
                  </h3>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="./assets/img/pet-essentials.png" width="360" height="360" loading="lazy"
                    alt="Morbi vel arcu scelerisque" class="img-cover default">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Pet essentials</a>
                  </h3>


                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="./assets/img/shelter-banner1.png" width="360" height="360" loading="lazy"
                    alt="Pet Shelter" class="img-cover default">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <h3 class="h3">
                    <a href="#" class="card-title">Pet Shelter</a>
                  </h3>

                </div>

              </div>
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
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="./assets/img/cat.jpg" width="330" height="300" loading="lazy" alt="Cat Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Cats</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="./assets/img/dog.jpg" width="330" height="300" loading="lazy" alt="Cat Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Dogs</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="./assets/img/rabbit.jpeg" width="330" height="300" loading="lazy" alt="Dog Food"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Rabbits</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="./assets/img/parrot.jpg" width="330" height="300" loading="lazy" alt="Dog Toys"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Farm animals</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="./assets/img/parrot.jpg" width="330" height="300" loading="lazy"
                    alt="Dog Sumpplements" class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Birds</a>
                </h3>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section class="cta has-bg-image" aria-label="cta" style="background-image: url('./assets/images/cta-bg.jpg')">
        <div class="container">

          <figure class="cta-banner">
            <img src="./assets/images/cta-banner.png" width="900" height="660" loading="lazy" alt="cat" class="w-100">
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

        </div>
    );
}

export default Home;


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
import "../styles/home.css";
import "../styles/common.css";
import bg from "../assets/img/bg2.jpeg";
import cat1 from "../assets/img/category-1.jpg";
import cat2 from "../assets/img/category-2.jpg";
import cat3 from "../assets/img/category-3.jpg";
import cat4 from "../assets/img/category-4.jpg";
import cat5 from "../assets/img/category-5.jpg";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            {/* <div className="container">
          <h1 style={{ color: 'black', paddingTop: '100px' }}>
              Add images and content here
          </h1>
      </div> */}
            <div className="image-background">
                <div className="image-container">
                    <img src={bg} alt="Background Image" style={{ width: '100%' }} />
                </div>
            </div>

            <section className="section category" aria-label="category">
                <div className="container">
                    <h2 className="h2 section-title">
                        <span className="span">Top</span> categories
                    </h2>
                    <ul className="has-scrollbar">
                        <li className="scrollbar-item">
                            <div className="category-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 330, height: 300 }}
                                >
                                    <img
                                        src={cat1}
                                        width="330"
                                        height="300"
                                        loading="lazy"
                                        alt="Cat Food"
                                        className="img-cover"
                                    />
                                </figure>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Cat Food
                                    </a>
                                </h3>
                            </div>
                        </li>
                        <li className="scrollbar-item">
                            <div className="category-card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{ width: 330, height: 300 }}
                                >
                                    <img
                                        src={cat2}
                                        width="330"
                                        height="300"
                                        loading="lazy"
                                        alt="Cat Food"
                                        className="img-cover"
                                    />
                                </figure>
                                <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Cat Food
                                    </a>
                                </h3>
                            </div>
                        </li>
                        {/* Add other category items similarly */}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;


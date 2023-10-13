import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import  Accessories from "../components/accessories";
import bags from "../assets/img/bags.jpg";
import house from "../assets/img/house.jpg"


function Cat_Products() {
  return (
    <div>
      <Navbar />

      <main>
        <article>
          <br />
          <br />
          <section className="section category" aria-label="category">
            <h2 className="h2 section-title">
              <span className="span">Pet</span> Shelter
            </h2>
            <br />
            <div>
              <h2 className="h2 section-title">
                <span className="span">Shop</span> By Dogs
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."
                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={house}
                      nameP="Plastic Dog Kennel"
                      price="Price: ₹1,000 - ₹5,000"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."
                    />

                  </li>
                </ul>
              </div>
            </div>


            <div>
              <h2 className="h2 section-title">
                <span className="span">Shop</span> By Cats
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={house}
                      nameP="Plastic Dog Kennel"
                      price="Price: ₹1,000 - ₹5,000"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />

                  </li>
                </ul>
              </div>
            </div>


            <div>
              <h2 className="h2 section-title">
                <span className="span">Shop</span> By Farm Animals
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={house}
                      nameP="Plastic Dog Kennel"
                      price="Price: ₹1,000 - ₹5,000"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Compostable Poop Bags"
                      price="Price: ₹400 - ₹500"
                      descp="Boxer dogs are self-assured, playful, and intelligent. They are also among the most athletic members of the canine 
                      species. Because each breed has specific needs, it’s important that your dog’s diet helps to maintain its unique lifestyle 
                      and optimal health. Suitable for Boxers aged 15 months old and over, ROYAL CANIN Boxer Adult is specially formulated with 
                      all the nutritional needs of your adult dog in mind. The Boxer’s dynamism is well-renowned – this breed never holds back in 
                      terms of exerting energy once engaged in physical activity. Therefore, great demands can be placed on its body, meaning the 
                      Boxer needs a diet adapted to its intense levels of physical activity. That’s why ROYAL CANIN Boxer Adult contributes to
                       maintaining muscle mass, thanks to adapted protein content and the inclusion of L-Carnitine. ROYAL CANIN Boxer Adult also
                        contains specific nutrients, such as taurine, EPA & DHA, to help support healthy cardiac function. Additionally, 
                        this formula contains an exclusive complex of antioxidants to help neutralize free radicals and support your dog’s 
                        natural defenses. The kibble found in ROYAL CANIN Boxer Adult is exclusively designed not only to make it easier for your
                         dog to grasp the kibble but to also encourage sufficient chewing before swallowing."

                    />

                  </li>
                </ul>
              </div>
            </div>
          </section>
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

      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default Cat_Products;

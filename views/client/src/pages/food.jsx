import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Accessories from "../components/accessories";

//dog food
import d1 from "../assets/food/d1.jpg";
import d2 from "../assets/food/d2.jpg";
import d3 from "../assets/food/d3.jpg";

//cat food
import c1 from "../assets/food/c1.jpg";
import c2 from "../assets/food/c2.webp";
import c3 from "../assets/food/c3.jpg";

//birds
import b1 from "../assets/food/b1.jpg";
import b2 from "../assets/food/b2.jpg";
import b3 from "../assets/food/b3.jpg";


//sea animals
import sa1 from "../assets/food/sa1.jpg";
import sa2 from "../assets/food/sa2.jpg";
import sa3 from "../assets/food/sa3.jpg";

//farm animals
import cb1 from "../assets/food/cb1.jpg";
import cb2 from "../assets/food/cb2.jpg";
import cb3 from "../assets/food/cb3.jpg";
import p1 from "../assets/food/p1.jpg";
import p2 from "../assets/food/p2.jpg";
import p3 from "../assets/food/p3.jpg";
import gs1 from "../assets/food/gs1.jpg";
import gs2 from "../assets/food/gs2.jpg";
import gs3 from "../assets/food/gs3.jpg";






import house from "../assets/img/house.jpg"


function Food() {
  return (
    <div>
      <Navbar />

      <main>
        <article>
          <br />
          <br />
          <section className="section category" aria-label="category">
            <h2 className="h2 section-title">
              <span className="span">Pet</span> Food
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
                      img_url={d1}
                      nameP="Pedigree Adult Dry Dog Food-Chicken Floavor & Vegetables"
                      price="Price: ₹299"
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
                      img_url={d2}
                      nameP="Pedigree Adult Wet Dog Food-Chicken & Liver Chunks in Gravy"
                      price="Price: ₹638"
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
                      img_url={d3}
                      nameP="Pedigree Biscrok Biscuits Dog Treats - Milk and Chicken Flavor"
                      price="Price: Rs. 200"
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
                      img_url={c1}
                      nameP="Whiskas Dry Cat Food for Mother and Babycat, Ocean Fish Flavour"
                      price="Price: Rs. 230"
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
                      img_url={c2}
                      nameP="Whiskas Kitten (2-12 months) Wet Cat Food, Tuna in Jelly"
                      price="Price: Rs. 600"
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
                      img_url={c3}
                      nameP="Me-O Creamy Cat Treats - Crab"
                      price="Price: Rs. 100"
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
                <span className="span">Shop</span> By Birds
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={b1}
                      nameP="Zupreem Fruit Blend Bird Food for Medium Birds"
                      price="Price: Rs. 340"
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
                      img_url={b2}
                      nameP="Vitapol Karmeo Premium Food for Budgie (500g)"
                      price="Price: Rs. 260"
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
                      img_url={b3}
                      nameP="Vitapol Smakers Snack Bird Treats for Budgies - Fruit (90g)"
                      price="Price: Rs. 235"
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
                <span className="span">Shop</span> By Sea Animals
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={sa1}
                      nameP="Boltz Healthy Fish Food For Aquarium - Nutritionist Choice"
                      price="Price: Rs. 399"
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
                      img_url={sa2}
                      nameP="Boltz Food Nutritionist Choice for Turtles"
                      price="Price: Rs. 299"
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
                      img_url={sa3}
                      nameP="Taiyo Discovery Pluss Arowana Fish Food - Floating Sticks"
                      price="Price: Rs. 350"
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
                      img_url={cb1}
                      nameP="Bio Blooms Agro India Private Limited Cow/Cattle Feed/Milking Cow Food Pellet For All Life Stages(1kg)"
                      price="Price: Rs. 400"
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
                      img_url={cb2}
                      nameP="Cattle Feed Pellet 18 kg Cow Feed/ Buffalo Feed 18000 Grams with Extra Nutrition"
                      price="Price: Rs. 1599"
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
                      img_url={cb3}
                      nameP="Gum-Tea, Essential Mixture Cow Feed/Buffalo Feed/Cattle Feed (15 kg) (Cattle Feed)"
                      price="Price: Rs. 2999"
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
                      img_url={p1}
                      nameP="4K argo Chicken/Hen/Poultry Feed for Growing Chicken Birds"
                      price="Price: Rs. 800"
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
                      img_url={p2}
                      nameP="VC™ (Pre-Starter) Ideal for Broiler, Layer, Rooster, Country, Duck,Quail,emu,Turkey"
                      price="Price: Rs. 728"
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
                      img_url={p3}
                      nameP="Nutriplus Starter Poultry Feed 5kg Concentrate"
                      price="Price: Rs. 899"
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
                      img_url={gs1}
                      nameP="Platina Organic Adult Goat /Sheep /Cattle Vegetable Feed Pellet (18 kg)"
                      price="Price: Rs. 1470"
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
                      img_url={gs2}
                      nameP="ADILAID Premium Ready Mix Dry Feed for Goats & Sheep (800 GMS)"
                      price="Price: Rs. 450"
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
                      img_url={gs3}
                      nameP="SK ORGANIC Sababul Grass Seeds for Cattle fodder like Goat sheep Buffalo cow (500gms)"
                      price="Price: Rs. 599"
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

        </article>
      </main>

      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default Food;

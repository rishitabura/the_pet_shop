import React from "react";
// import "../styles/style.css";
import "../styles/product_style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";

import Accessories from "../components/accessories";
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
              <span className="span">Health</span> Care
            </h2>
            <br />
            <div>
              <h2 className="h2 section-title">
                <span className="span">Shop</span> By Dogs & Cats
              </h2>
              <div className="main">
                <br />
                <br />
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Himalaya Erina EP Shampoo for Dogs & Cats - Lemon Fragrance"
                      price="Price: Rs. 248"
                      descp="1. Himalaya Erina EP Shampoo for Dogs & Cats helps in tick and flea management for your furry friend. 
                      2. Prevents ectoparasites: Erina EP controls ectoparasites (external parasites) like ticks, fleas and lice in pets.
                      3. Controls skin infections: Its antimicrobial and antifungal actions, prevent skin infections and improve the overall condition of the skin."
                      ind="1. To control ectoparasites like ticks, fleas and lice. 
                      2. To improve overall skin health."
                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={house}
                      nameP="Himalaya Supplement for Dogs & Cats - Digyton Drops (30ml)"
                      price="Price: Rs. 119"
                      descp="Himalaya Supplement for Dogs & Cats - Digyton Drops (30ml) are formulated to address digestive issues in dogs and cats, puppies and kittens. 
                      It also keeps a healthy digestive tract. The supplement offers a carminative action which eliminates the recurrence of colic, flatulence and abdominal 
                      discomfort through the key ingredients - Cardamom and Dill Oil."
                      feat="1. Digyton facilitates the secretion of proteolytic, amylolytic and lipolytic enzymes that catalyse the digestion of food.
                      2. Digestive enzyme secretion: Digyton facilitates the secretion of proteolytic, amylolytic and lipolytic enzymes that catalyse the digestion of food.
                      3. Regularizes bowel movement: By regularising bowel movements, it helps in treating gastrointestinal disorders in puppies. It also tones the digestive tract.
                      4. Carminative: Its carminative action prevents the recurrence of flatulence, colic and abdominal discomfort.
                      "
                      ind="1. Colic, flatulence and abdominal discomfort in weaned puppies.
                      2. Indigestion and dyspepsia.
                      3. Improper absorption and assimilation-of food.
                      4. Gastrointestinal disorders caused by sudden feed change.
                      "
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Happy Puppy Organics - Hemp Seed Oil For Cats & Dogs"
                      price="Price: Rs. 540"
                      descp="1. What is hemp?
                      a. Hemp is one of the strongest natural fibres in the world belonging to the Cannabis Sativa family and is known to have over 50,000 uses from textiles, building materials, paper, food, body care products etc.
                      b. Hemp is often confused with Marijuana, but the two aren't the same.
                      c. Hemp contains very low levels of THC (about 0.3%), the psychoactive substance that gets you high. Therefore, Hemp has generally been used to describe non-intoxicating Cannabis.
                      2. Organic hemp is grown without pesticides. The plant itself helps regenerate the soil due to its long root system, which supports the health of the soil and the environment.
                      3. Hemp oil is extracted through a special hemp press and is not subjected to high heat processing like vegetable, corn, soy, and rice bran oils.
                      4. What does Hemp heal?
                      a. Acne, rashes, skin irritations
                      b. Hot spots, yeast & fungal infections
                      c. Dry, flaky and itchy skin
                      d. Allergy symptoms
                      e. Post-surgery treatment
                      f. Reduces scarring
                      g. Soothing discomfort
                      h. Inflamed bug bites
                      i. Interdigital cysts
                      j. Lick granuloma
                      k. Preventing & treating bacterial infections.
                      "

                    />

                  </li>
                </ul>
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="My Beau Cat Supplement - Vitamins & Minerals 300ml"
                      price="Price: Rs. 1306"
                      descp="T1. asty oil is a good supplement for the cat, kittens.
                      2. A supplement for cats & dogs and birds to improve skin & coat condition, immunity, digestion, overall health & hairballs in cats. 
                      3. A unique blend of omega 3 & 6 essential fatty acids while also providing the important water (B Vitamins) and fat-soluble (A, D, E Vitamins) at 99.5% absorption rates. 
                      4. The nutrients that are provided in the product are absorbed straight into your pet's bloodstream, therefore offering the superior health benefits often seen within days of feeding.
                      5. Also contains flavourings of yeast, meat & garlic for high palatability.
                      6. Improvements in health/vitality (improved immunity).
                      7. Improved skin coat condition.
                      8. Improved digestion of nutrients.
                      "
                    />
                  </li>
                </ul>
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Himalaya Supplement for Dogs & Cats - Furglow"
                      price="Price: Rs. 295"
                      descp="1. Himalaya Supplement for Dogs & Cats - Furglow contains plant derived oils that are rich in Omega 6 and Omega 3 fatty acids. Furlgow also provides Zinc and Selenium, essential minerals for healthy skin in pets. Vitamin A and Vitamin E have been added to support overall hair growth. 
                      2. Furglow contains plant derived oils that are rich in Omega 6 and Omega 3 fatty acids.
                      3. Furglow contains Omega 6 and Omega 3 fatty acids in the ratio of 10:1 (AAFCO recommended).
                      4. Furlgow also provides Zinc and Selenium, essential minerals for healthy skin in pets.
                      5. Vitamin A and Vitamin E have been added to support overall hair growth.
                      6. Furglow is fortified with Vitamin B6, Biotin and Vitamin D.
                      7. Shiny and glossy coat.
                      8. Hair shedding, flaky skin and dandruff.
                      9. Allergic skin conditions like flea bite, atopy.
                      10. Fungal skin infection and pyoderma.
"
                    />
                  </li>
                </ul>
                <ul className="grid-list1">
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Himalaya Supplement for Dogs & Cats - Anxocare Vet Tablets (60 tabs)"
                      price="Price: Rs. 141"
                      descp="1. Himalaya Supplement for Dogs & Cats - Anxocare Vet Tablets (60 tabs) is a natural supplement which will help your dog manage anxiety and/or behavioural problems which could be caused by noise, travel, unfamiliarity with people/environment etc. This supplement helps with behavioural problems like aggression, restlessness and hyperexcitability & also promotes better receptivity and learning abilities during training periods.
                      2. Anxiolytic: Anxocare controls anxiety due to fear and emotional stress, which can be caused by unfamiliar people, environment, noise and travel.
                      3. Behaviour modifier: It helps with behavioural problems like aggression, restlessness and hyperexcitability. The drug also promotes better receptivity and learning abilities during training periods.
                      4. Specific and nonspecific anxiety/separation anxiety.
                      5. In controlling aggression.
                      6. In training dogs for better receptivity.
                      "
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
                      img_url={bags}
                      nameP="Livton Liver Tonic for Birds and Small Animals (30ml)"
                      price="Price: Rs. 130"
                      descp="1. Livton is a liquid liver stimulant fortified with Yeast and vitamins especially made for birds and small animals for their liver care.  
                      2. Improves overall liver function and helps better digestion.
                      3. Maintains optimum health and immunity.
                      4. Eliminates toxins.
                      5. Stimulates hepatocyte regeneration and thereby restore hepatic functions.
                      6. 3 ml per litre of water daily.
                      7. 4 drops per 30 ml of water or on food or directly in the mouth or as directed by the Veterinarian.
                      "

                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={house}
                      nameP="Vitapol Mineral Block For Birds - Natural"
                      price="Price: ₹1,000 - ₹5,000"
                      descp="Your bird needs calcium for healthy bones, strong eggs and shiny feathers. Vitapols' Mineral Block for Birds comprises 100% natural 
                      calcium carbonate ensuring your pet bird receives all the minerals necessary to thrive in its environment. Available in a playful 35 gm block, 
                      the product is easily consumable by your bird. It not only eliminates boredom but is also the perfect food supplement."
                      feat="1. Rich in calcium, helps in the strengthening of bones and proper construction of  eggshells during breeding phase
                      2. Essential during moulting phase, promotes healthy feathers
                      "

                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Vetrina Vetrivit Avian Multivitamin Supplement for Birds (30ml)"
                      price="Price: Rs. 210"
                      descp="1. Vetrivit Avian is used to meet the vitamin needs of cage birds such as budgies, canaries and parrots. 
                      2. Complete vitamin supplement for your cage birds.
                      3. Promotes growth and vitality
                      4. Protects against stress
                      5. For budgies, canary, parrots and other cage birds: 1 ml dissolved in 50 ml water
                      6. For Pigeons: 1ml dissolved in 100 ml water or as directed by the veterinarian"

                    />
                  </li>
                </ul>

                <ul>
                  <li>
                    <Accessories
                      img_url={bags}
                      nameP="Winmite Flea and Tick Spray for Birds (100ml)"
                      price="Price: Rs. 250"
                      descp="1. Winmite Flea and Tick Spray - a natural way to control pest infection on pets
                      2. Contains natural botanical extracts and essential oils for the control and elimination of mites and lice for pigeons and other avian species
                      3. A micro-emulsion water base that is easy to spray and completely pesticide-free
                      4. The all-natural oil formation offers relief from itching, and feather loss and helps with skin inflammation 
                      5. Spray Winmite on the pet's body from a distance 
                      6. Avoid direct sprays on the eyes
                      7. Apply twice a week"

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

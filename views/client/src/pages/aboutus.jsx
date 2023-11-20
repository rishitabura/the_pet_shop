/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/style1.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import aboutimg from "../assets/img/ellipse-1@2x.png";

// import dogimg from "../assets/img/dog.jpg";

function About() {
  return (
    <div>

      <Navbar />
      <br></br>
      <br></br>
      {/* <img className="paws-1-1" alt="" src={paw} /> */}

      <img className="macbook-air-1-child" alt="" src={aboutimg} />
      <b className="who-we-are">{`Who We Are `}</b>
      <b className="about-pet-bazaar">About Pet Bazaar</b>
      <div className="lorem-ipsum-dolor1">
        Welcome to Pet Bazaar, where our love for pets drives our commitment to providing the best for your furry friends. We understand the joy and companionship that pets bring to our lives, and we strive to enhance that experience through quality products and exceptional service.

        At Pet Bazaar, we believe that every pet deserves the finest care. Our carefully curated selection of products includes premium pet food, cozy beds, entertaining toys, grooming essentials, and more – all designed to cater to the unique needs of your pets.
      </div>

     


      <br></br>
      <br></br> <br></br>

      <br></br>
      <Footer />

    </div>
  );
}

export default About;


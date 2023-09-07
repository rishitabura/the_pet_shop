/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/style1.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import aboutimg from "../assets/img/ellipse-1@2x.png";
import paw from "../assets/img/paws-1-1@2x.png";
import about1 from "../assets/img/about.jpg";
import about2 from "../assets/img/about2.webp";
import about3 from "../assets/img/about3.jpg";


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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum
        sed officiis, ex excepturi praesentium obcaecati, nesciunt magnam libero
        modi maxime omnis consectetur quo! Ab expedita quos harum cum
        recusandae.
      </div>

      <br></br>
      <br></br>
      {/* <div className="learn-more-parent">
        <button className="learn-more">Learn more</button>
        <img className="frame-child" alt="" src="/arrow-1.svg" />
        <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
          <b className="lorem-ipsum-dolor">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            rerum sed officiis, ex excepturi praesentium obcaecati, nesciunt
            magnam libero modi maxime omnis consectetur quo! Ab expedita quos
            harum cum recusandae.
          </b>
        </div>
        <button className="frame-item" />
        <b className="learn-about-pets">Learn About Pets Life</b>
        <div className="rectangle-parent">
          <img className="frame-inner" alt="" src={about1} />
          <img className="frame-inner" alt="" src={about2} />
          <img className="frame-inner" alt="" src={about3} />
        </div>
        <div className="rectangle-div" />
      </div> */}
  
      <br></br>
      <Footer />

    </div>
  );
}

export default About;


import React from "react";
import  { useState } from 'react';
import AdaptabilityContainer from "../components/AdaptabilityContainer";
import ProductInformationContainer from "../components/ProductInformationContainer";
import GoldenRetrieversDogCard from "../components/GoldenRetrieversDogCard";
import "../styles/animalspages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


const GoldenRetrieversDog = () => {
  return (

    <div className="landing-page">
        <Navbar/>
      <AdaptabilityContainer />
      <img className="frozen-1-icon" alt="" src="/frozen-1@2x.png" />
      <ProductInformationContainer />
      <div className="features">
        <div className="features-card">
          <div className="text">
            <div className="weight">Weight</div>
            <b className="xyz">xyz</b>
          </div>
        </div>
        <div className="features-card1">
          <div className="text1">
            <div className="size">Top Speed</div>
            <b className="xyz1">xyz</b>
          </div>
        </div>
        <div className="features-card2">
          <div className="text2">
            <div className="coat">Max Range</div>
            <b className="curly-wavy">xyz</b>
          </div>
        </div>
        <div className="features-card3">
          <div className="text3">
            <div className="max-torques">Max Torques</div>
            <b className="xyz2">xyz</b>
          </div>
        </div>
        <div className="features-card4">
          <div className="text4">
            <div className="hill-climbing">Hill Climbing</div>
            <b className="xyz3">xyz</b>
          </div>
        </div>
        <div className="features-card5">
          <div className="text5">
            <div className="hydralic-disc-brakes">Hydralic Disc Brakes</div>
            <b className="xyz4">xyz</b>
          </div>
        </div>
      </div>
      <GoldenRetrieversDogCard />
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      
      <Footer />
    </div>
  );
};

export default GoldenRetrieversDog;

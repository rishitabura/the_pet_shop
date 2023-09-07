import React from "react";
import  { useState } from 'react';

import GoldenRetrieversDog3Img from "../assets/img/golden-retriever3.jpg";

import "../styles/AdaptabilityContainer.css";
const AdaptabilityContainer = () => {
  return (
    <div className="multiple-modes">
      <div className="gold-bag-rack">
        <img className="image-icon" alt="" src={GoldenRetrieversDog3Img}/>
        <div className="text6">
          <div className="feature">
            <div className="upto-30-c">upto 30 °C</div>
            <img className="sun-1-icon" alt="" src="/sun-1@2x.png" />
          </div>
          <b className="cold-weather-tolerance-container">
            <p className="cold-weather">{`Cold Weather `}</p>
            <p className="cold-weather">Tolerance</p>
          </b>
          <div className="upto-67-c">upto-6.7 ° C</div>
          <b className="hot-weather-tolerance-container">
            <p className="cold-weather">{`Hot Weather `}</p>
            <p className="cold-weather">Tolerance</p>
          </b>
        </div>
      </div>
      <div className="heading">
        <div className="temperatures-should-be">
          Temperatures should be moderate for Golden Retrievers.
        </div>
        <b className="adaptability">Adaptability</b>
      </div>
    </div>
  );
};

export default AdaptabilityContainer;

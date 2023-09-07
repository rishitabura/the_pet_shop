import React from "react";
import  { useState } from 'react';

import GoldenRetrieversDog2Img from "../assets/img/Golden-Retrievers-Dog2.jpg";

import "../styles/GoldenRetrieversDogCard.css";
const GoldenRetrieversDogCard = () => {
  return (
    <div className="hero">
      <img className="image-icon1" alt="" src={GoldenRetrieversDog2Img}/>
      <div className="text7">
        <div className="retrievers-are-originally">{`Retrievers Are Originally From Scotland, Where They Were Bred For Hunting. `}</div>
        <div className="heading2">
          <div className="dicider" />
          <div className="golden-retrievers-dog">{`Golden Retrievers Dog `}</div>
        </div>
        <div className="buy-now">
          <div className="buy-now1">Buy now</div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default GoldenRetrieversDogCard;

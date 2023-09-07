import React from "react";
import  { useState } from 'react';


import "../styles/ProductInformationContainer.css";

import GoldenRetrieversDog1Img from "../assets/img/Golden-Retrievers-Dog1.jpeg";



const ProductInformationContainer = () => {
  return (
    <div className="product-information">
      <div className="features1">
        <div className="feature1">
          <div className="friendliness">Friendliness</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="feature2">
          <div className="friendliness">Good with other Dogs</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="feature3">
          <div className="friendliness">Good with Kids</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="feature4">
          <div className="friendliness">Barking Tendencies</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="feature5">
          <div className="friendliness">Energy Level</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
        <div className="feature6">
          <div className="friendliness">Playfullness</div>
          <img className="vector-icon" alt="" src="/vector.svg" />
        </div>
      </div>
      <img className="image-5-icon" alt="" src={GoldenRetrieversDog1Img} />
      <div className="heading1">
        <div className="these-attributes-have">
          These attributes have been rated by dog trainers, expert vets and pet
          behaviourists.
        </div>
        <b className="traits">Traits</b>
      </div>
    </div>
  );
};

export default ProductInformationContainer;

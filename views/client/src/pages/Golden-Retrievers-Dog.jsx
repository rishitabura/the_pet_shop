import React from "react";
import  { useState } from 'react';
import AdaptabilityContainer from "../components/AdaptabilityContainer";
import ProductInformationContainer from "../components/ProductInformationContainer";
import GoldenRetrieversDogCard from "../components/GoldenRetrieversDogCard";
import "../styles/animalspages.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import {AiOutlineArrowRight} from "react-icons/ai";

const GoldenRetrieversDog = () => {
  return (
    <div>
      <Navbar/>

      <Footer style= {{}}/>
    </div>

    // <div className="landing-page1">
    //     <Navbar/>
    //   <AdaptabilityContainer />
    //   {/* <img className="frozen-1-icon" alt="" src={GoldenRetrieversDog3Img}/> */}
    //   <AiOutlineArrowRight/>
    //   <ProductInformationContainer />
    //   <div className="features_1">
    //     <div className="features-card_1">
    //       <div className="text_1">
    //         <div className="weight_1">Weight</div>
    //         <b className="xyz_1">xyz</b>
    //       </div>
    //     </div>
    //     <div className="features-card1">
    //       <div className="text1_1">
    //         <div className="size_1">Top Speed</div>
    //         <b className="xyz1_1">xyz</b>
    //       </div>
    //     </div>
    //     <div className="features-card2_1">
    //       <div className="text2_1">
    //         <div className="coat_1">Max Range</div>
    //         <b className="curly-wavy_1">xyz</b>
    //       </div>
    //     </div>
    //     <div className="features-card3_1">
    //       <div className="text3_1">
    //         <div className="max-torques_1">Max Torques</div>
    //         <b className="xyz2_1">xyz</b>
    //       </div>
    //     </div>
    //     <div className="features-card4_1">
    //       <div className="text4_1">
    //         <div className="hill-climbing_1">Hill Climbing</div>
    //         <b className="xyz3_1">xyz</b>
    //       </div>
    //     </div>
    //     <div className="features-card5-1">
    //       <div className="text5_1">
    //         <div className="hydralic-disc-brakes_1">Hydralic Disc Brakes</div>
    //         <b className="xyz4_11">xyz</b>
    //       </div>
    //     </div>
    //   </div>
    //   <GoldenRetrieversDogCard />
    //   <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
      
    //   {/* <Footer /> */}
    // </div>
  );
};

export default GoldenRetrieversDog;

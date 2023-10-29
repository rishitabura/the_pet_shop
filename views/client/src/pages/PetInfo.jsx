import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PetProps from "../components/PetProps";

import catimg from "../assets/img/gdps.webp";
import { useParams } from 'react-router-dom';

function PetInfo() {
    const { category, pid } = useParams();
    const [pet, setPet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchData = async () => {
      fetch(`http://localhost:5000/pet/${category}/${pid}/view`, {
        method: "POST",
        CrossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPet(data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    if (isLoading) return <div style={{ color: "black" }}>Loading...</div>;
  
    return (
      <div>
        {/* Navbar Section */}
        <div className="navbar-section">
          <Navbar />
        </div>
  
        {/* Productprops Section */}
        <div className="productprops-section">
          {pet ? (
            <PetProps
              img_url={pet.Image}
              gender={pet.Gender}
              nameP={pet.Name}
              price={pet.Cost}
              avail={pet.Available}
              weight={pet.Weight}
              height={pet.Height}
              color={pet.Colour}
              category={category}
              pid={pid}
              features={pet.Features}
            />
          ) : (
            <div>No data available</div>
          )}
        </div>
  
        {/* Footer Section */}
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    );
  }
  
  export default PetInfo;
  
import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProductProps from "../components/ProductProps";

import catimg from "../assets/img/gdps.webp";
import { useParams } from 'react-router-dom';

function ProductInfo() {
    const { category, pid } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const fetchData = async () => {
      fetch(`http://localhost:5000/product/${category}/${pid}/view`, {
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
          console.log(data.data);
          setProduct(data.data);
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
          {product ? (
            <ProductProps
              img_url={product.Image}
              nameP={product.Name}
              price={product.Cost}
              avail={product.Available}
              weight={product.Weight}
              tags={product.Tags}
              description={product.Description
              }
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
  
  export default ProductInfo;
  
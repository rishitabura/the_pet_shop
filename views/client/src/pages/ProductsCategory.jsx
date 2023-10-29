/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import { Card_TopCat3 } from "../components/card_topCategories";



// import Card from "../components/card_topCategories";
function ProductsCategory() {
  const [isLoading, setIsLoading] = useState(null);
  const [productData, setProductData] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();


  const fetchData = async () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/product/${category}/getAll`, {
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
          setProductData(data.data);
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

  if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
  else {
    return (
      <div>
        <Navbar />
        <main>
          <article>
            <br></br>
            <br></br>

              <section className="section category" aria-label="category">
                <div className="container">
                  <h2 className="h2 section-title">
                    <span className="span">{category}</span>
                  </h2>
                  <ul className="has-scrollbar">
                    {productData?.map((item, index) => (
                      <Card_TopCat3
                        key={index}
                        img_url={item.Image} 
                        title={item.Name} 
                        page_url={`/products/${category}/${item._id}`} 
                      />
                    ))}
                  </ul>
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
}

export default ProductsCategory;


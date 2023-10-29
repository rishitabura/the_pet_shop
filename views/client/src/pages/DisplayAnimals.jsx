/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


import GermanShepherd from "../assets/img/German-Shepherd-Dog.jpg"
import FrenchBulldogs from "../assets/img/French-Bulldogs.jpg";
import GoldenRetrievers from "../assets/img/Golden-Retrievers.jpg";
import PoodlesDog from "../assets/img/Poodles-dog.jpg";
import RottweilersDog from "../assets/img/Rottweilers-dog.jpg";
import BeaglesDog from "../assets/img/Beagles-dog.jpg";
import ctabg from "../assets/img/cta-bg.jpg";
import ctabanner from "../assets/img/cta-banner.png";
import cat1 from "../assets/img/cat1.jpeg";
import cat2 from "../assets/img/cat2.jpg";
import cat3 from "../assets/img/cat3.jpg";
import cat4 from "../assets/img/cat4.jpg";
import cat5 from "../assets/img/cat5.jpg";
import ducks from "../assets/img/ducks.jpg";
import horses from "../assets/img/horses.jpg";


import cows from "../assets/img/cows.jpeg";
import hens from "../assets/img/hens.jpg";
import goat from "../assets/img/goat.jpeg";



import { Card_TopCat3 } from "../components/card_topCategories";



// import Card from "../components/card_topCategories";
function DisplayAnimals() {
  const [isLoading, setIsLoading] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const {searchTag} = useParams();
  const [petcat, setPetCat] = useState(null);
  const navigate = useNavigate();


  const fetchData = async () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/pet/tags/${searchTag}`, {
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
        setCategories(data.data);
        //console.log(data.data);
        // Fetch data for each category
        const categoryPromises = data.data.map((cat) => {
          //console.log("Printing cat", cat);
          return fetch(`http://localhost:5000/pet/${cat}/getAll`, {
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
              console.log(cat.name, data.data);
              setCategoryData((prevData) => ({
                ...prevData,
                [cat]: data.data,
              }));
            }
            );
        });
        // Once all category data is fetched, set isLoading to false
        Promise.all(categoryPromises).then(() => setIsLoading(false));
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
            {categories.map((cat) => (
              <section key={cat} className="section category" aria-label="category">
                <div className="container">
                  <h2 className="h2 section-title">
                    <span className="span">{cat}</span> Breeds
                  </h2>
                  <ul className="has-scrollbar">
                    {categoryData[cat]?.map((item, index) => (
                      <Card_TopCat3
                        key={index}
                        img_url={item.Image} 
                        title={item.Name} 
                        page_url={`/pets/${cat}/${item._id}`} 
                      />
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </article>
        </main>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default DisplayAnimals;


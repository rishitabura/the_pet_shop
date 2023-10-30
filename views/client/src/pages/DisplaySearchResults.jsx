/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/style.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";


import { Card_TopCat3 } from "../components/card_topCategories";



// import Card from "../components/card_topCategories";
function DisplaySearchResults() {
    const [isLoading, setIsLoading] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState({});
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState(null);
    var results;


    const fetchData = async () => {
        setIsLoading(true);
        await fetch(`http://localhost:5000/customer/search/${searchTerm}`, {
            method: "GET",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data.data);
                setSearchResults(data.data);
                //console.log(searchResults);
                results = data.data;
                console.log(results);
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
                        {searchResults?Object.keys(searchResults).map((category) => (
                            Object.keys(searchResults[category]).length > 0?
                            <section key={category} className="section category" aria-label="category">
                                <div className="container">
                                    <h2 className="h2 section-title">
                                        <span className="span">{category}</span> 
                                    </h2>
                                    <ul className="has-scrollbar">
                                        {Object.keys(searchResults[category]).map((subCategory) => (
                                            searchResults[category][subCategory].map((item, index) => (
                                                <Card_TopCat3
                                                    key={index}
                                                    img_url={item.Image}
                                                    title={item.Name}
                                                    page_url={`/${category}/${subCategory}/${item._id}`}
                                                />
                                            ))
                                        ))}
                                    </ul>
                                </div>
                            </section>:<></>
                        )):<p>No Results Found</p>}

                    </article>
                </main>
                <br></br>
                <br></br>
                <Footer />
            </div>
        );
    }
}

export default DisplaySearchResults;


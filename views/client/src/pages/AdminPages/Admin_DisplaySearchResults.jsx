/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../../styles/style.css";
import AdminNavbar from "../../components/AdminNavbar";



// import Card from "../components/card_topCategories";
function Admin_DisplaySearchResults() {
    const [isLoading, setIsLoading] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryData, setCategoryData] = useState({});
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState(null);
    var results;


    const fetchData = async () => {
        setIsLoading(true);
        await fetch(`http://localhost:5000/admin/search/${searchTerm}`, {
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
                  <AdminNavbar />
                  <div className="adminpages">
                    <h1>Search {searchTerm}</h1>
          
                    {searchResults ? (
                      Object.keys(searchResults).map((category) => (
                        <section key={category} className="section category" aria-label="category">
                          <div className="container">
                            <h2 className="h2 section-title">
                              <span className="span">{category}</span>
                            </h2>
                            <table className="admin-table">
                              <tr>
                                <th className="admin-table-head">Name</th>
                                <th className="admin-table-head">_id</th>
                                <th className="admin-table-head">Available</th>
                                <th className="admin-table-head">Cost</th>
                                <th className="admin-table-head">Action</th>
                              </tr>
                              {Object.keys(searchResults[category]).map((subCategory) =>
                                searchResults[category][subCategory].map((val, index) => (
                                  <tr key={index}>
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val._id}</td>
                                    <td className="admin-table-data">{val.Available}</td>
                                    <td className="admin-table-data">{val.Cost}</td>
                                    <td className="admin-table-data">
                                      {category === 'pets' ? (
                                        <Link to={`/admin/getAllPets/${subCategory}/${val._id}`}>
                                          <button className="admin-petcat-button">View</button>
                                        </Link>
                                      ) : (
                                        <Link to={`/admin/getAllProducts/${subCategory}/${val._id}`}>
                                          <button className="admin-petcat-button">View</button>
                                        </Link>
                                      )}
                                    </td>
                                  </tr>
                                ))
                              )}
                            </table>
                          </div>
                        </section>
                      ))
                    ) : (
                      <div>No results found</div>
                    )}
                  </div>
                </div>
              );
            }
          }
export default Admin_DisplaySearchResults;


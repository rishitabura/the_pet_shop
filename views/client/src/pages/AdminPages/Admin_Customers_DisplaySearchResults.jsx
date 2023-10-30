/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../../styles/style.css";
import AdminNavbar from "../../components/AdminNavbar";

function Admin_Customers_DisplaySearchResults() {
    const [isLoading, setIsLoading] = useState(null);
    const navigate = useNavigate();
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState(null);
    var results;


    const fetchData = async () => {
        setIsLoading(true);
        await fetch(`http://localhost:5000/admin/customers/search/${searchTerm}`, {
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
                console.log(data.data);
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
          
                        <section className="section category" aria-label="category">
                          <div className="container">
                            <table className="admin-table">
                              <tr>
                              <th className="admin-table-head">Name</th>
                            <th className="admin-table-head">Email</th>
                            <th className="admin-table-head">Phone</th>
                            <th className="admin-table-head">Action</th> 
                              </tr>
                             {searchResults?
                                searchResults?.map((val, index) => (
                                  <tr key={index}>
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val.Email}</td>
                                    <td className="admin-table-data">{val.Phone}</td>
                                    {/* <td className="admin-table-data">{val.Cost}</td> */}
                                    <td className="admin-table-data">
                                      
                                        <Link to={`/admin/customers/${val._id}`}>
                                          <button className="admin-petcat-button">View</button>
                                        </Link>
                                    
                                      
                                    </td>
                                  </tr>
                            
                                )
                    ) : (
                      <div>No results found</div>
                    )}
                     </table>
                          </div>
                        </section>
                  </div>
                </div>
              );
            }
          }
export default Admin_Customers_DisplaySearchResults;


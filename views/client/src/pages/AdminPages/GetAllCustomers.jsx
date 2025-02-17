import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";

function GetAllCustomers() {
    const [isLoading, setIsLoading] = useState(null);
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    //console.log("Searching for:", searchTerm);
    navigate(`/admin/customers/search/${searchTerm}`);
    window.location.reload(false);
  };

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/customers/getAllCustomers", {
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
                
                setCustomers(data.data);
                console.log(data.data);
                console.log(customers);
            
            });

        setIsLoading(false);

    };



    // const registeradmin = async (event) => {
    //     event.preventDefault();
    //     fetch("http://localhost:5000/customer/profile", {
    //         method: "POST",
    //         CrossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },

    //         body: JSON.stringify({

    //         }),

    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data, "Profile");
    //             if (data.success == true) {
    //                 alert("Updated Successfully");
    //             }
    //         });

    // };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
    else {
    return (
    <div>
    <AdminNavbar />
    
      <div className="adminpages">
        <h1> Customers </h1>

        <input
            type="text"
            className="search-bar"
            placeholder="Search Customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="admin-table-button" onClick={handleSearch}>
            Search
          </button>
      
        <table className="admin-table">
                <tr>
                    <th className="admin-table-head">Name</th>
                    <th className="admin-table-head">Email</th>
                    <th className="admin-table-head">Phone</th>
                    <th className="admin-table-head">Action</th> 
                </tr>
                {customers?.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val.Name}</td>
                            <td className="admin-table-data">{val.Email}</td>
                            <td className="admin-table-data">{val.Phone}</td>
                            <td className="admin-table-data">
                                
                            <Link to={`/admin/customers/${val._id}`}>
                                        <button className="admin-petcat-button">
                                            View
                                        </button>
                                </Link>

                         
                                </td>
                            
                            
                        </tr>
                    )
                })}
            </table>
      </div>
    </div>
  );
}
}

export default GetAllCustomers;
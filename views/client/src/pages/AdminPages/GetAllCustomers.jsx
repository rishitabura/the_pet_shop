import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate } from "react-router-dom";

function GetAllCustomers() {
    const [isLoading, setIsLoading] = useState(null);
    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/getAllCustomers", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ 
            }),

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
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.Phone}</td>
                            <td className="admin-table-data">
                                
                           <button className="admin-table-button">
                                View
                                </button>

                         
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
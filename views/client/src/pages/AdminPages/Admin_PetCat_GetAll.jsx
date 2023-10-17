import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Admin_PetCat_GetAll() {
    const [isLoading, setIsLoading] = useState(null);
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.petcat);
    const petcat =  location.state.petcat;

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/getAllPets", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ 
                category: petcat
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                
                setPets(data.data);
                console.log(pets);
            
            });

        setIsLoading(false);

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
        <h1> {petcat} </h1>
      
        <table className="admin-table">
                <tr>
                    <th className="admin-table-head">Name</th>
                    <th className="admin-table-head">_id</th>
                    <th className="admin-table-head">Year of Birth</th>
                    <th className="admin-table-head">Cost</th>
                    <th className="admin-table-head">Action</th> 
                </tr>
                {pets?.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val.Name}</td>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.Year}</td>
                            <td className="admin-table-data">{val.Cost}</td>
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

export default Admin_PetCat_GetAll;
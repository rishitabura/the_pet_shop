import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";

function ViewCategories() {
    const [isLoading, setIsLoading] = useState(null);
    const [categories, setCategories] = useState([]);
    const [petcat, setPetCat] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/viewCategories", {
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
                
                setCategories(data.data);
                console.log(data.data);
                console.log(categories);
            
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
        <h1> Pet Categories </h1>
        <Link to="/admin/addpet"><button className="admin-table-button">Add a Pet</button></Link>
        <ul className="admin-petcat-list">
 
                {categories?.map((val) => {
                    return (
                        <li>
                            {val.name}
                            <Link
                            to= "/admin/getAllPets"
                            state={{
                              petcat: val.name,
                            }}>
                           <button className="admin-petcat-button">
                                View
                                </button>

                            </Link>
                            
                            
                        </li>
                    )
                })}
                 </ul>
      </div>
    </div>
  );
}
}

export default ViewCategories;
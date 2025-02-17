import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Admin_PetCat_GetAll() {
    const [isLoading, setIsLoading] = useState(null);
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { petcat } = useParams();

    const deletePet = async (event, id) => {
        const token = window.localStorage.getItem("wtcptoken");
        event.preventDefault();
        fetch(`http://localhost:5000/admin/pet/${petcat}/${id}/delete`, {
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
                if (data.success == true) {
                    alert("Deleted Successfully");
                    navigate(`/admin/getAllPets/${petcat}`);
                    window.location.reload(false);
                }
            });

    };



    const fetchData = async () => {
        setIsLoading(true);
        
        fetch(`http://localhost:5000/admin/pet/${petcat}/getAll`, {
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

        <Link to="/admin/addpet"><button className="admin-table-button">Add a Pet</button></Link>
      
        <table className="admin-table">
                <tr>
                    <th className="admin-table-head">Name</th>
                    <th className="admin-table-head">_id</th>
                    <th className="admin-table-head">Available</th>
                    <th className="admin-table-head">Cost</th>
                    <th className="admin-table-head">Action</th> 
                </tr>
                {pets?.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val.Name}</td>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.Available}</td>
                            <td className="admin-table-data">{val.Cost}</td>
                            <td className="admin-table-data">

                                <Link to={`/admin/getAllPets/${petcat}/${val._id}`}>
                                        <button className="admin-petcat-button">
                                            View
                                        </button>
                                </Link>

                                <button className="admin-petcat-button" onClick={(event) => deletePet(event, val._id)}>
                                            Delete
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
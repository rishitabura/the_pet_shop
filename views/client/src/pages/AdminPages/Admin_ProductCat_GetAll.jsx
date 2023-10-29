import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Admin_ProductCat_GetAll() {
    const [isLoading, setIsLoading] = useState(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { productcat } = useParams();

    const deleteProduct = async (event, id) => {
        event.preventDefault();
        fetch(`http://localhost:5000/admin/product/${productcat}/${id}/delete`, {
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
                    navigate(`/admin/getAllProducts/${productcat}`);
                    window.location.reload(false);
                }
            });

    };



    const fetchData = async () => {
        setIsLoading(true);
        
        fetch(`http://localhost:5000/admin/product/${productcat}/getAll`, {
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
                
                setProducts(data.data);
                //console.log(products);
            
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
        <h1> {productcat} </h1>

        <Link to="/admin/addproduct"><button className="admin-table-button">Add a Product</button></Link>
      
        <table className="admin-table">
                <tr>
                    <th className="admin-table-head">Name</th>
                    <th className="admin-table-head">_id</th>
                    <th className="admin-table-head">Available</th>
                    <th className="admin-table-head">Cost</th>
                    <th className="admin-table-head">Action</th> 
                </tr>
                {products?.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val.Name}</td>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.Available}</td>
                            <td className="admin-table-data">{val.Cost}</td>
                            <td className="admin-table-data">

                                <Link to={`/admin/getAllProducts/${productcat}/${val._id}`}>
                                        <button className="admin-petcat-button">
                                            View
                                        </button>
                                </Link>

                                <button className="admin-petcat-button" onClick={(event) => deleteProduct(event, val._id)}>
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

export default Admin_ProductCat_GetAll;
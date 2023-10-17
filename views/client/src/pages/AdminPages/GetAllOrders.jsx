import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";

function GetAllOrders() {
    const [isLoading, setIsLoading] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/getAllOrders", {
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
                
                setOrders(data.data);
                console.log(data.data);
                console.log(orders);
            
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
        <h1> Orders </h1>
        {/* <button onClick={registeradmin()}>Register New Admin</button> */}
        <table className="admin-table">
                <tr>
                    <th className="admin-table-head">Order Id</th>
                    <th className="admin-table-head">Customer Email</th>
                    <th className="admin-table-head">Number of Items</th>
                    <th className="admin-table-head">Cost</th>
                    <th className="admin-table-head">Status</th>
                     <th className="admin-table-head">Action</th> 
                </tr>
                {orders?.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.email}</td>
                            <td className="admin-table-data">{val.qty}</td>
                            <td className="admin-table-data">{val.cost}</td>
                            <td className="admin-table-data">{val.status}</td>
                            {val.Type != "MasterAdmin" && (<td>
                          <Link  to={{
                                pathname: "/viewOrder",
                                state: val._id 
                            }}>
                                <button  className="admin-table-button">
                                 View
                                </button>
                            </Link>
                                </td>
                            )}
                            
                        </tr>
                    )
                })}
            </table>
      </div>
    </div>
  );
}
}

export default GetAllOrders;
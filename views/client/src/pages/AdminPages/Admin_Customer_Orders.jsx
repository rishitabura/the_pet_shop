import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link, useParams } from "react-router-dom";

function Admin_Customer_Orders() {
    const [isLoading, setIsLoading] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const {cid} = useParams();

    const fetchData = async () => {
        setIsLoading(true);
        fetch(`http://localhost:5000/admin/customers/${cid}/orders`, {
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
                
                setOrders(data.data);
                console.log(data.data);
                //console.log(orders);
            
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
                    <th className="admin-table-head">Date of Order</th>
                    <th className="admin-table-head">Total Amount</th>
                    <th className="admin-table-head">Status</th>
                     <th className="admin-table-head">Action</th> 
                </tr>
                {orders.length > 0 && orders.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.CreatedAt}</td>
                            <td className="admin-table-data">{val.cost}</td>
                            <td className="admin-table-data">{val.Status}</td>
                           <td>
                          <Link  to={{
                                pathname: `/admin/orders/${val._id}`,
                            }}>
                                <button  className="admin-table-button">
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

export default Admin_Customer_Orders;
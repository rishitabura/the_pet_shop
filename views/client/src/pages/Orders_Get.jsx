import React, { useState, useEffect } from "react";
import "../styles/style1.css";
import "../styles/admin.css";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Orders_Get() {
    const [isLoading, setIsLoading] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        fetch(`http://localhost:5000/customer/orders/`, {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ token }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data);
                setOrders(data.data);
                setIsLoading(false);

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
                <Navbar />
                <div className="adminpages">
                    <h1>My Orders</h1>
                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Id</th>
                            <th className="admin-table-head">Items</th>
                            <th className="admin-table-head">Amount</th>
                            <th className="admin-table-head">Date of Order</th>
                            <th className="admin-table-head">Status</th>
                            <th className="admin-table-head">Action</th>
                        </tr>
                        {orders?.map((val) => {
                            return (
                                <tr>
                                    <td className="admin-table-data">{val._id}</td>
                                    <td className="admin-table-data">{val.NumItems}</td>
                                    <td className="admin-table-data">{val.Amount}</td>
                                    <td className="admin-table-data">{new Date(val.CreatedAt).toLocaleDateString()}</td>
                                    <td className="admin-table-data">{val.Status}</td>
                                    <td className="admin-table-data">
                                        <Link to={`/customer/orders/${val._id}`}>
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

export default Orders_Get;

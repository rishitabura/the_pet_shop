import React, { useState, useEffect } from "react";
import "../styles/style1.css";
import "../styles/admin.css";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Orders_View() {
    const [isLoading, setIsLoading] = useState(null);
    const [order, setOrder] = useState([]);
    const {oid} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        fetch(`http://localhost:5000/customer/orders/${oid}`, {
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
                setOrder(data.data);
                console.log(order)
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
                    <h1> Viewing Order Id {oid}</h1>

                    <p>Total Items: {order?.NumItems}</p>
                    <p>Total Amount: {order?.Amount}</p>
                    <p>Payment Method: {order?.PaymentMethod}</p>
                    <p>Order Status: {order?.Status}</p>

                   
                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Name</th>
                            <th className="admin-table-head">Quantity</th>
                            <th className="admin-table-head">Amount</th>
                        </tr>
                        {order?.OrderItems?.map((val) => {
                            return (
                                <tr>
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val.Qty}</td>
                                    <td className="admin-table-data">{val.Amt}</td>
                                   
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        );
    }
}

export default Orders_View;

import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Orders_View() {
    const [isLoading, setIsLoading] = useState(null);
    const [order, setOrder] = useState({});
    const [customer, setCustomer] = useState([]);
    const [orderStatus, setOrderStatus] = useState([]);
    const {oid} = useParams();
    var customerId;
    const navigate = useNavigate();
    const location = useLocation();

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    const updateOrderStatus = async () => {
        
        await fetch(`http://localhost:5000/admin/orders/${oid}`, {
            method: "PUT", // Use the appropriate HTTP method
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newstatus: orderStatus}),
        }).then((res) => res.json())
        .then(() => {
            alert("Updated Successfully");
        }
        );
    };

    const fetchData = async () => {
        setIsLoading(true);
        console.log(oid);
        await fetch(`http://localhost:5000/admin/orders/${oid}`, {
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
            console.log(data.data);
                setOrder(data.data);
                console.log(order);
                customerId = data.data.CustomerId;
                setOrderStatus(data.data.OrderStatus);
     
        }).then(()=>{
        fetch(`http://localhost:5000/admin/customers/${customerId}`, {
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
                setCustomer(data.data);
                console.log(customer);
                setIsLoading(false);

            setIsLoading(false);
        });
    });
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
                    <h1> Viewing Order Id {oid}</h1><br/>

                    <h3>Customer Information</h3>
                    <p>Name: {customer?.Name}</p>
                    <p>Email: {customer?.Email}</p>
                    <p>Phone: {customer?.Phone}</p>
                    <p>Address: {customer?.Address_line1}, {customer?.Address_area}, {customer?.City} - {customer?.Pincode}</p>

                    <p>Total Items: {order?.NumItems}</p>
                    <p>Total Amount: {order?.Amount}</p>
                    <p>Payment Method: {order?.PaymentMethod}</p>
                    <p>Order Status: 
                    <select value={orderStatus} onChange={handleStatusChange}>
                        <option value="Order Placed">Order Placed</option>
                        <option value="Order Processing">Order Processing</option>
                        <option value="Dispatched">Dispatched</option>
                        <option value="Delivered">Delivered</option>
                    </select></p>
                    <button onClick={updateOrderStatus} className="admin-table-button" >Update Status</button>

                    <br/><h3>Order Information</h3>
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

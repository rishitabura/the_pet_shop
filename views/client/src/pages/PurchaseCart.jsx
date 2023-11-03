import React, { useState, useEffect } from "react";
import "../styles/style1.css";
import "../styles/admin.css";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";

function PurchaseCart() {
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [address, setAddress] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("Card");
    const navigate = useNavigate();

    const purchaseCart = async (event) => {
        event.preventDefault();
        if (address.address_line1) {
            var token = window.localStorage.getItem("wtcptoken");
            fetch("http://localhost:5000/customer/cart/purchase", {
                method: "POST",
                CrossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

                body: JSON.stringify({
                    totalItems,
                    totalAmount,
                    paymentMethod,
                    token
                }),

            })
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data, "Profile");
                    if (data.success == true) {
                        alert("Order Placed Successfully");
                        navigate('/customer/orders');
                    }
                    else {
                        alert("Not Enough Stock! Check Back Later");
                    }
                });
        }
        else {
            alert("Please add address in profile first");
        }

    };


    const fetchData = async () => {
        const token = window.localStorage.getItem("wtcptoken");

        // Fetch user's address from the profile
        fetch(`http://localhost:5000/customer/fetchprofile`, {
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
                if (data.success) {
                    if ('Address_line1' in data.data) setAddress((prev) => ({ ...prev, address_line1: data.data.Address_line1 }));
                    if ('Address_area' in data.data) setAddress((prev) => ({ ...prev, address_area: data.data.Address_area }));
                    if ('City' in data.data) setAddress((prev) => ({ ...prev, address_city: data.data.City }));
                    if ('Pincode' in data.data) setAddress((prev) => ({ ...prev, pincode: data.data.Pincode }));
                }
            });

        // Fetch the cart
        fetch(`http://localhost:5000/customer/cart/view`, {
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
                setCart(data.data);
                let totalAmt = 0;
                let totalQty = 0;
                if (data.data && data.data.Items) {
                    for (const item of data.data.Items) {
                        const itemAmt = parseInt(item.Amt); 
                        const itemQty = parseInt(item.Qty); 
                        totalAmt += itemAmt;
                        totalQty += itemQty;
                        //console.log(item.Name, totalAmt, itemAmt * itemQty);
                    }
                }
                //console.log(totalAmt, totalQty);
                setTotalAmount(totalAmt);
                setTotalItems(totalQty);
                //console.log(totalAmount, totalItems);
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
                    <h1>Cart</h1>
                    <p>Total Amount: {totalAmount}</p>
                    <p>Total Items: {totalItems}</p>
                    <p>Address: {address.address_line1 ? <div>{address.address_line1}
                        <br /> {address.address_area} <br />
                        {address.address_city} - {address.pincode} </div>
                        : "Address not available"}</p>

                    <select
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value={paymentMethod}
                    >
                        <option value="Card">Credit/Debit Card</option>
                        <option value="UPI">UPI</option>
                        <option value="BankTransfer">Bank Transfer</option>
                        <option value="Cash">Cash</option>
                    </select>

                    {totalItems>0?
                    <button className="admin-petcat-button" onClick={purchaseCart}>
                        Purchase
                    </button>
                    :<></>}


                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Name</th>
                            <th className="admin-table-head">Category</th>
                            <th className="admin-table-head">Qty</th>
                            <th className="admin-table-head">Amount</th>
                        </tr>
                        {cart?.Items?.map((val) => {
                            return (
                                <tr key={val._id}>
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val.Category}</td>
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

export default PurchaseCart;

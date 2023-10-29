import React, { useState, useEffect } from "react";
import "../styles/style1.css";
import "../styles/admin.css";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Cart() {
    const [isLoading, setIsLoading] = useState(null);
    const [cart, setCart] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    const deletefromCart = async (event, p, category, id) => {
        event.preventDefault();
        const token = window.localStorage.getItem("wtcptoken");
        fetch(`http://localhost:5000/customer/cart/remove/${p}/${category}/${id}`, {
            method: "PUT",
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
                if (data.success == true) {
                    alert("Deleted Successfully");
                    navigate(`/customer/cart`);
                    window.location.reload(false);
                }
            });
    };



    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
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
                    {totalItems>0?<Link to='purchase'>
                    <button className="admin-petcat-button" >
                                            Purchase 
                    </button></Link>
                    :<></>}
                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Name</th>
                            <th className="admin-table-head">Category</th>
                            <th className="admin-table-head">Qty</th>
                            <th className="admin-table-head">Amount</th>
                            <th className="admin-table-head">Action</th>
                        </tr>
                        {cart?.Items?.map((val) => {
                            return (
                                <tr>
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val.Category}</td>
                                    <td className="admin-table-data">{val.Qty}</td>
                                    <td className="admin-table-data">{val.Amt}</td>
                                    <td className="admin-table-data">
                                        <Link to={`/${val.Type}/${val.Category}/${val.pId}`}>
                                            <button className="admin-petcat-button">
                                                View
                                            </button>
                                        </Link>
                                        <button className="admin-petcat-button" onClick={(event) => deletefromCart(event, val.Type, val.Category, val.pId)}>
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

export default Cart;

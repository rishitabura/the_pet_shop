import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link, useParams } from "react-router-dom";

function GetAllTickets() {
    const [isLoading, setIsLoading] = useState(null);
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        fetch(`http://localhost:5000/admin/customersupport/getAllTickets`, {
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

                setTickets(data.data);
                setIsLoading(false);
                console.log(isLoading);
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
                    <h1>Customer Support </h1>
                    <Link to="/admin/customersupport/add"><button className="admin-table-button">Add a Ticket</button></Link>
                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Id</th>
                            {/* <th className="admin-table-head">Customer Id</th> */}
                            <th className="admin-table-head">Name</th>
                            <th className="admin-table-head">Email</th>
                            <th className="admin-table-head">Date</th>
                            <th className="admin-table-head">Status</th>
                            <th className="admin-table-head">Action</th>
                        </tr>
                        {tickets?.map((val) => {
                            return (
                                <tr>
                                    <td className="admin-table-data">{val._id}</td>
                                    {/* <td className="admin-table-data">{val.CustomerId}</td> */}
                                    <td className="admin-table-data">{val.Name}</td>
                                    <td className="admin-table-data">{val.Email}</td>
                                    <td className="admin-table-data">{new Date(val.CreatedAt).toLocaleDateString()}</td>
                                    <td className="admin-table-data">{val.Status}</td>
                                    <td className="admin-table-data">
                                        <Link to={`/admin/customersupport/${val._id}`}>
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


export default GetAllTickets;
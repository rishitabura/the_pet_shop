import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link, useParams } from "react-router-dom";

function GetAllOrders() {
    const [isLoading, setIsLoading] = useState(null);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const {cid} = useParams();

const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    //console.log("Searching for:", searchTerm);
    navigate(`/admin/orders/search/${searchTerm}`);
    window.location.reload(false);
  };

    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        fetch(`http://localhost:5000/admin/orders/getAllOrders`, {
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
                <AdminNavbar />
                <div className="adminpages">
                    <h1>Orders</h1>
                    <input
            type="text"
            className="search-bar"
            placeholder="Search Orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>
                    <table className="admin-table">
                        <tr>
                            <th className="admin-table-head">Id</th>
                            {/* <th className="admin-table-head">Customer Id</th> */}
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
                                    {/* <td className="admin-table-data">{val.CustomerId}</td> */}
                                    <td className="admin-table-data">{val.NumItems}</td>
                                    <td className="admin-table-data">{val.Amount}</td>
                                    <td className="admin-table-data">{new Date(val.CreatedAt).toLocaleDateString()}</td>
                                    <td className="admin-table-data">{val.Status}</td>
                                    <td className="admin-table-data">
                                        <Link to={`/admin/orders/${val._id}`}>
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


export default GetAllOrders;
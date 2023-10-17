import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";

function GetAllAdmins() {
    const [isLoading, setIsLoading] = useState(null);
    const [admins, setAdmins] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/getAllAdmins", {
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
                
                setAdmins(data.data);
                console.log(data.data);
                console.log(admins);
            
            });

        setIsLoading(false);

    };


    const updatePrivileges = async (event, id) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        
        fetch("http://localhost:5000/admin/updatePriviledges", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                token: token,
                email: id,
                type: "MasterAdmin"

            }),

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success == true) {
                    alert("Updated Successfully");
                    navigate("/admin/getAllAdmins");
                }
                
            });

    };

    const deleteAdmin = async (event, id) => {
        const token = window.localStorage.getItem("token");
        event.preventDefault();
        fetch("http://localhost:5000/admin/removeAdmin", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                token: token,
                email: id

            }),

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "Profile");
                if (data.success == true) {
                    alert("Deleted Successfully");
                    navigate("/admin/getAllAdmins");
                }
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
        <h1> Administrators </h1>
        <Link to="/admin/registeradmin">
        <button className="admin-table-button">Register New Admin</button>
        </Link>
        <table className="admin-table">
                <tr className="admin-table-row">
                    <th className="admin-table-head">Name</th>
                    <th className="admin-table-head">Email</th>
                    <th className="admin-table-head">Type</th>
                     <th className="admin-table-head">Action</th> 
                </tr>
                {admins.map((val) => {
                    return (
                        <tr>
                            <td className="admin-table-data">{val.Name}</td>
                            <td className="admin-table-data">{val._id}</td>
                            <td className="admin-table-data">{val.Type}</td>
                            {val.Type != "MasterAdmin" && (<td className="admin-table-data">
                            <button className="admin-table-button" onClick={(event)=>updatePrivileges(event, val._id)}>Update to MasterAdmin</button>
                            
                                <button className="admin-table-button" onClick={(event) => deleteAdmin(event, val._id)}>
                                Delete
                                </button>
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

export default GetAllAdmins;
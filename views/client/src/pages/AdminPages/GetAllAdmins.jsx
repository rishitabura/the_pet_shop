import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, Link } from "react-router-dom";

function GetAllAdmins() {
    const [isLoading, setIsLoading] = useState(null);
    const [admins, setAdmins] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
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
                //console.log(data.data);
                //console.log(admins);
            
            });
            const token = window.localStorage.getItem("wtcptoken");
            fetch("http://localhost:5000/admin/getEmail", {
                method: "POST",
                CrossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
    
                body: JSON.stringify({  token: token}),
    
            })
                .then((res) => res.json())
                .then((data) => {
                    //console.log(data);
                    setUserEmail(data.data);
                    //console.log(userEmail);
                    //console.log(admins);
                
                });
    

        setIsLoading(false);

    };


    const updatePrivileges = async (event, id, type) => {
        event.preventDefault();
        const token = window.localStorage.getItem("wtcptoken");
        if(type=="Admin") type = "MasterAdmin";
        else type = "Admin";
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
                type: type

            }),

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success == true) {
                    alert("Updated Successfully");
                    navigate("/admin/manageadmins");
                    window.location.reload(false);
                }
                
            });

    };

    const deleteAdmin = async (event, id) => {
        const token = window.localStorage.getItem("wtcptoken");
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
                    navigate("/admin/manageadmins");
                    window.location.reload(false);
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
                            <td className="admin-table-data">{val.Email}</td>
                            <td className="admin-table-data">{val.Type}</td>
                            { val.Email != userEmail && val.Email != "masteradmin@petbazaar.com" ? (<td className="admin-table-data">
                            <button className="admin-table-button" onClick={(event)=>updatePrivileges(event, val.Email, val.Type)}>Change Priviledges</button>
                            
                                <button className="admin-table-button" onClick={(event) => deleteAdmin(event, val.Email, val.Type)}>
                                Delete
                                </button>
                                </td>
                            ):null}
                            
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
import React, { useState, useEffect } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

function Admin_Ticket_View() {
    const [isLoading, setIsLoading] = useState(null);
    const [ticket, setTicket] = useState({});
    const [ticketStatus, setTicketStatus] = useState([]);
    const {tid} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const handleStatusChange = (e) => {
        setTicketStatus(e.target.value);
    };

    const updateTicketStatus = async () => {
        
        await fetch(`http://localhost:5000/admin/customersupport/${tid}`, {
            method: "POST", // Use the appropriate HTTP method
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newstatus: ticketStatus}),
        }).then((res) => res.json())
        .then(() => {
            alert("Updated Successfully");
        }
        );
    };

    const fetchData = async () => {
        setIsLoading(true);
        console.log(tid);
        await fetch(`http://localhost:5000/admin/customersupport/${tid}`, {
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
                setTicket(data.data);
    
                setTicketStatus(data.data.Status);
                setIsLoading(false);
     
        })
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
                    <h1> Viewing Customer Support Ticket Id {tid}</h1><br/>

                    <p>Name: {ticket?.Name}</p>
                    <p>Email: {ticket?.Email}</p>
                    <p>Date: {new Date(ticket?.CreatedAt).toLocaleDateString()}</p>
                    <p>Text: {ticket?.Text}</p>
                    
                    <p>Status: 
                    <select value={ticketStatus} onChange={handleStatusChange}>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                    </select></p>
                    <button onClick={updateTicketStatus} className="admin-table-button" >Update Status</button>
                </div>
            </div>
        );
    }
}

export default Admin_Ticket_View;

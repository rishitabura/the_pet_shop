import React, { useState } from "react";
import "../../styles/style1.css";
import "../../styles/admin.css";
import AdminNavbar from "../../components/AdminNavbar";
import Admin_Dashboard_Card from "../../components/Admin_Dashboard_Card";

function AdminDashboard() {


  return (
    <div>
    <AdminNavbar />
    
      <div className="adminpages">
        <h1> Dashboard </h1>

     
         <h3> Statistics  </h3>
         <div className="admin-dash">
        <Admin_Dashboard_Card
        title="36"
        subtitle="Pets"
         />
         <Admin_Dashboard_Card
        title="112"
        subtitle="Pet Care Supplies"
         />
         <Admin_Dashboard_Card
        title="200"
        subtitle="New Customers"
         />
         </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
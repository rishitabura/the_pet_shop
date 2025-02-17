import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoLogIn } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/style.css";
import "../styles/admincommons.css";
import { setupConfig } from "@ionic/core";
import { slide as Menu } from "react-burger-menu";
// import Sidebar from "./Sidebar"

function AdminNavbar() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();
  let usertype = null;

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    navigate(`/admin/search/${searchTerm}`);
    window.location.reload(false);


  };

  const isAdmin = () => {
    usertype = window.localStorage.getItem("usertype");
    console.log(usertype);
    if (usertype === "Admin" || usertype === "MasterAdmin") setAdmin(usertype);
    else usertype = null;
  };

  const logout = () => {
    alert("Successful");
    window.localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    isAdmin();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!(admin === "Admin" || admin === "MasterAdmin"))
    return (
      <>
        <div style={{ color: "black" }}>Access Restricted</div>
        <Link to="/">
          <p>Click here to return to Home</p>
        </Link>
      </>
    );
  else {
    return (
      <>
        <header className="header adminheader" data-header style={{ backgroundColor: "white" }}>
          <div className="container">
            <div>
              <button type="button" onClick={toggleMenu} id="outer-container">
                <AiOutlineMenu size={30} color="black" />
              </button>
            </div>

            <a href="/admin/dashboard" className="logo adminlogo">
              Pet Bazaar Admin
            </a>

            <nav className="navbar" data-navbar>
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a href="/admin/dashboard" className="navbar-link" data-nav-link>
                    Home
                  </a>
                </li>
              </ul>
            </nav>

            <div className="header-actions">

            <input
            type="text"
            className="search-bar"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>

              <button className="action-btn user" aria-label="User">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
              </button>
              <a href="/admin/profile">
                <button type="button" className="login-btn">
                  <ImProfile size={30} color="black" />
                </button>
              </a>
              <button type="button" className="loginbtn" onClick={logout}>
                <IoLogIn size={30} color="black" />
              </button>
            </div>
          </div>
        </header>
      
        {isMenuOpen && (
          <Menu  className="slidermenu" isOpen={true} onStateChange={(state) => setIsMenuOpen(state.isOpen)} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            <Link to="/admin/dashboard">
              <p className="menu-item1">Dashboard</p>
            </Link>

            <Link to="/admin/manageadmins">
              <p className={admin === "MasterAdmin" ?  "menu-item1": "hide" }>Admins</p>
            </Link>

            <Link to="/admin/pets/viewCategories">
              <p className="menu-item1">Pets</p>
            </Link>

            <Link to="/admin/products/viewCategories">
              <p className="menu-item1">Products</p>
            </Link>

            <Link to="/admin/customers">
              <p className="menu-item1">Customers</p>
            </Link>

            <Link to="/admin/orders">
              <p className="menu-item1">Orders</p>
            </Link>

            <Link to="/admin/customersupport">
              <p className="menu-item1">Customer Support</p>
            </Link>

           
          </Menu>
          
        )}
      </>
    );
  }
}

export default AdminNavbar;
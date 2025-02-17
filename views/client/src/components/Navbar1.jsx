/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoLogIn } from "react-icons/io5";
// import '@ionic/react/css/core.css';
import "../styles/style.css";

import ShopDropdown from "./ShopDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";


function Navbar() {

  let location = useLocation();
  let navigate = useNavigate();
  var login = false;

  const [searchTerm, setSearchTerm] = useState("");

  const islogin = () => {
    const token = window.localStorage.getItem("wtcptoken");
    if (token) login = true;
    else login = false;
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    navigate(`/search/${searchTerm}`);
    window.location.reload(false);


  };

  const logout = () => {
    alert("Successful");
    window.localStorage.clear();
    window.location.href = "/";
  }


  return (

    <header className="header" data-header style={{ 'backgroundColor': 'white' }}>
      <div className="container">
        {islogin()}

        {/* <button className="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
          <ion-icon className="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
          <ion-icon className="close-outline" aria-label="true" class="close-icon"></ion-icon>
        </button> */}


        <a href="/" className="logo">Pet Bazaar</a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">

            <li className="navbar-item">
              <Link to="/" className="navbar-link" data-nav-link>Home</Link>
            </li>

            {/* <li className="navbar-item">
            <Link to="/animalCategories" className="navbar-link" data-nav-link>Animal Categories</Link>
            </li> */}

            <li className="navbar-item">
            <Link to="/animals" className="navbar-link" data-nav-link>Shop
                
              </Link> 
            </li>

            <li className="navbar-item">
            <Link to="/about" className="navbar-link" data-nav-link>About Us </Link>
            </li>

            <li className="navbar-item">
            <Link to="/about" className="navbar-link" data-nav-link>Contact</Link>
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
      
          <a href="/login">
            <button type="button" className={login ? "hide" : "loginbtn"}>
              <MdAccountCircle size={30} color="black" />
            </button>
          </a>

          <button className="action-btn user" aria-label="User">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          </button>

          <Link to="/customer/profile">
            <button type="button" className={login ? "loginbtn" : "hide"} >
              <ImProfile size={30} color="black" />
            </button>
          </Link>

          <Link to="/customer/cart">
          <button type="button" className={login ? "loginbtn" : "hide"}>
            {/* <IoLogIn size={30} color="black" />  */} Cart
          </button>
          </Link>

          <Link to="/customer/orders">
          <button type="button" className={login ? "loginbtn" : "hide"}>
            {/* <IoLogIn size={30} color="black" />  */} Orders
          </button>
          </Link>

          <button type="button" className={login ? "loginbtn" : "hide"} onClick={logout}>
            <IoLogIn size={30} color="black" />
          </button>
        </div>


      </div>
    </header>
  )

}

export default Navbar;
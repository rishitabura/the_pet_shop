import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import { IonIcon } from '@ionic/react';
// import '@ionic/react/css/core.css';
import "../styles/style.css";
// import "../styles/common.css";


function Navbar() {

  let location = useLocation();
  var login = false;

  const islogin = () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    if (token) login = true;
    else login = false;
  }

  const logout = () => {
    alert("Successful");
    window.localStorage.clear();
    window.location.href = "/";
  }


    return (

        <header className="header" data-header style={{'background-color': 'white'}}>
        <div className="container">
        {islogin()}
          <button className="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
            <ion-icon className="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
            <ion-icon className="close-outline" aria-label="true" class="close-icon"></ion-icon>
          </button>

          
        {/* <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <IonIcon name="menu-outline" aria-hidden="true" className="menu-icon" />
          <IonIcon name="close-outline" aria-label="true" className="close-icon" />
        </button> */}
    
          <a href="#" className="logo">Pet Bazaar</a>
    
          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
    
              <li className="navbar-item">
                <a href="index.html" className="navbar-link" data-nav-link>Home</a>
              </li>
    
              <li className="navbar-item">
                <a href="#pet-categories" className="navbar-link" data-nav-link>Pet Categories</a>
              </li>
    
              <li className="navbar-item">
                <a href="#shop" className="navbar-link" data-nav-link>Shop</a>
              </li>
    
              <li className="navbar-item">
                <a href="about.html" target="_blank" className="navbar-link" data-nav-link>About Us </a>
              </li>
    
              <li className="navbar-item">
                <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
              </li>
    
            </ul>
    
            <a href="#" className="navbar-action-btn">Log In</a>
          </nav>
    
          <div className="header-actions">
    
            <button className="action-btn" aria-label="Search">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>
    
            <button className="action-btn user" aria-label="User">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>
    
            <button className="action-btn" aria-label="cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
    
              <span className="btn-badge">0</span>
            </button>

         

            <Link to="/login"><button type="button" className={login ? "hide" : "loginbtn"}>Login</button></Link>
           <button type="button" className={login ? "loginbtn" : "hide"} onClick={logout}>Logout</button>

          
    
          </div>
    
        </div>
      </header>
    )

}

export default Navbar;
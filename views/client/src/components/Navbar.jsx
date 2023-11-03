/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoLogIn } from "react-icons/io5";
// import '@ionic/react/css/core.css';
import "../styles/style.css";

import ShopDropdown from "./ShopDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";


function Navbar() {

  let location = useLocation();
  var login = false;

  const islogin = () => {
    const token = window.localStorage.getItem("token");
    //console.log(token);
    if (token) login = true;
    else login = false;
  }

  const logout = () => {
    alert("Successful");
    window.localStorage.clear();
    window.location.href = "/";
  }


  return (

    <header className="header" data-header style={{ 'backgroundColor': 'white' }}>
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

        <a href="/" className="logo">Pet Bazaar</a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>Home</a>
            </li>

            <li className="navbar-item">
              <a href="#pet-categories" className="navbar-link" data-nav-link>Pet Categories</a>
            </li>

            <li className="navbar-item">
              {/* <a href="" className="navbar-link" data-nav-link>Shop */}
              <div className="dropdown">
                <button className="dropbtn" style={{"color" : "var(--eerie-black)"}}>Shop</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              {/* 
              </a> */}
            </li>

            <li className="navbar-item">
              <a href="/about" className="navbar-link" data-nav-link>About Us </a>
            </li>

            <li className="navbar-item">
              <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>

        </nav>
        <div className="header-actions">
          <a href="/login">
            <button type="button" className={login ? "hide" : "loginbtn"}>
              <MdAccountCircle size={30} color="black" />
            </button>
          </a>

          <button className="action-btn user" aria-label="User">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="/userprofile">
            <button type="button" className={login ? "loginbtn" : "hide"} >
              <ImProfile size={30} color="black" />
            </button>
          </a>

          <button type="button" className={login ? "loginbtn" : "hide"} onClick={logout}>
            <IoLogIn size={30} color="black" />
          </button>
        </div>


      </div>
    </header>
  )

}

export default Navbar;
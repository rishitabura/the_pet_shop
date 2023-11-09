import React, { useState, useContext } from "react";
import { Link, Navigate, useLocation, useNavigate, NavLink } from "react-router-dom";
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { LiaPawSolid } from "react-icons/lia";
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoLogIn } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

import "../styles/navbar.css";
// import "../styles/style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


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
    <div className="header" data-header style={{ 'backgroundColor': 'white' }}>
      {islogin()}
      <nav>
        <Link to="/" className="title">
          Pet Bazaar
          {/* <LiaPawSolid  size={30} color="black"/> */}
        </Link>

        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="header-actions">

          <div className="search">
            <input 
              type="text" className="searchTerm"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />

            <button type="button" className="searchButton" onClick={handleSearch}>
              <AiOutlineSearch size={28} color="black" />
            </button>
          </div>

         
          <Link to="/login">
            <button type="button" className={login ? "hide" : "loginbtn"}>
              <BiLogInCircle size={28} color="black" />
            </button>
          </Link>


          <Link to="/customer/profile" className={menuOpen ? "open" : ""}>
            <button type="button" className={login ? "loginbtn" : "hide"}  >
              <ImProfile size={28} color="black"  />
            </button>
          </Link>

          <Link to="/customer/cart" className={menuOpen ? "open" : ""}>
            <button type="button" className={login ? "loginbtn" : "hide"}>
              {/* <IoLogIn size={30} color="black" />  */}
              <BsCart size={28} color="black" />
            </button>
          </Link>

          <Link to="/customer/orders" className={menuOpen ? "open" : ""}>
            <button type="button" className={login ? "loginbtn" : "hide"}>
              {/* <IoLogIn size={30} color="black" />  */}
              <BsCartCheck size={28} color="black" />
            </button>
          </Link>

          <button type="button" className={login ? "loginbtn" : "hide"} onClick={logout}>
            <BiLogOutCircle size={28} color="black" />
          </button>

          
        </div>
      </nav>
    </div>

  );
}
export default Navbar;

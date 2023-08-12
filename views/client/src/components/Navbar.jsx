import React from 'react';
// import { IonIcon } from '@ionic/react';
// import '@ionic/react/css/core.css';
import "../styles/style.css";
// import "../styles/common.css";


function Navbar() {
  return (

    <header class="header" data-header style={{ 'background-color': 'white' }}>
      <div class="container">

        <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
            <ion-icon name="close-outline" aria-label="true" class="close-icon"></ion-icon>
          </button>

        {/* <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <IonIcon name="menu-outline" aria-hidden="true" className="menu-icon"></IonIcon>
          <IonIcon name="close-outline" aria-label="true" className="close-icon"></IonIcon>
        </button> */}

        <a href="#" class="logo">Pet Bazaar</a>

        <nav class="navbar" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="index.html" class="navbar-link" data-nav-link>Home</a>
            </li>

            <li class="navbar-item">
              <a href="#pet-categories" class="navbar-link" data-nav-link>Pet Categories</a>
            </li>

            <li class="navbar-item">
              <a href="#shop" class="navbar-link" data-nav-link>Shop</a>
            </li>

            <li class="navbar-item">
              <a href="about.html" target="_blank" class="navbar-link" data-nav-link>About Us </a>
            </li>

            <li class="navbar-item">
              <a href="#contact" class="navbar-link" data-nav-link>Contact</a>
            </li>

          </ul>

          <a href="#" class="navbar-action-btn">Log In</a>
        </nav>

        <div class="header-actions">

          <button class="action-btn" aria-label="Search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>

          <button class="action-btn user" aria-label="User">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
          </button>

          <button class="action-btn" aria-label="cart">
            <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

            <span class="btn-badge">0</span>
          </button>

        </div>

      </div>
    </header>
  )

}

export default Navbar;
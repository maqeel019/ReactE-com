// import React from 'react';
import { Link } from "react-router-dom";

function Menu({ cart }) {
  return (
    <div>
      <nav className="navbar-expand-lg navbar fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/store">
                  Store
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li className="nav-item btnCart ">
                <Link to="/cart">
                  <button className="LogAcc"> 
                 <p>{cart}</p> 
                     <img src="/images/Inkedcart3.png" alt="" /> </button>
                </Link>
              </li>
              <li>
                
                <Link to="/account">
                  <button className="LogAcc">Account</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

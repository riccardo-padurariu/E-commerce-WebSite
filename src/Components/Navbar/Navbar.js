import React from "react";
import '../../Styles/Navbar.css';
import searchbar from '../../Assets/Search 01.png';
import cart from '../../Assets/Cart.png';
import user from '../../Assets/User.png';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <button className="home-button">
        <p className="caption">ONLINE STORE</p>
        <div className="tooltip">Go to main page</div>
      </button>
      <div className="navbar-buttons">
        <button className="nav-but">
          <p className="caption">STORE</p>
          <div className="tooltip">Go to store</div>
        </button>
        <button className="nav-but">
          <p className="caption">PHONES</p>
          <div className="tooltip">Go to phones</div>
        </button>
        <button className="nav-but">
          <p className="caption">TV</p>
          <div className="tooltip">Go to tv</div>
        </button>
        <button className="nav-but">
          <p className="caption">AI</p>
          <div className="tooltip">Go to AI</div>
        </button>
      </div>
      <div className="user-buttons">
        <div className="searchbar-div">
          <img className="searchbar-image" src={searchbar}></img>
          <input className="searchbar-input" type="text" placeholder="Search..."></input>
        </div>
        <button className="cart-button">
          <img className="cart-image" src={cart}></img>
          <div className="tooltip-user">Go to cart</div>
        </button>
        <button className="user-button">
          <img className="user-image" src={user}></img>
          <div className="tooltip-user">User</div>
        </button>
      </div>
    </div>
  );
}
import React from "react";
import '../../Styles/Navbar.css';
import searchbar from '../../Assets/Search 01.png';
import cart from '../../Assets/Cart.png';
import user from '../../Assets/User.png';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <Link to={"http://localhost:3000/home"} state={props.cart}><button className="home-button">
        <p className="caption">ONLINE STORE</p>
        <div className="tooltip">Go to main page</div>
      </button></Link>
      <div className="navbar-buttons">
        <button className="nav-but">
          <p className="caption">STORE</p>
          <div className="tooltip">Go to store</div>
        </button>
        <Link to={"http://localhost:3000/phones"} state={props.cart}><button className="nav-but">
          <p className="caption">PHONES</p>
          <div className="tooltip">Go to phones</div>
        </button></Link>
        <Link to={"http://localhost:3000/tvs"} state={props.cart}><button className="nav-but">
          <p className="caption">TV</p>
          <div className="tooltip">Go to tv</div>
        </button></Link>
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
        <Link to={"http://localhost:3000/cart"} state={props.cart}><button className="cart-button">
          <img className="cart-image" src={cart}></img>
          <div className="tooltip-user">Go to cart</div>
        </button></Link>
        <button className="user-button">
          <img className="user-image" src={user}></img>
          <div className="tooltip-user">User</div>
        </button>
      </div>
    </div>
  );
}
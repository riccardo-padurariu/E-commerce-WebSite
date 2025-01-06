import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import cartLogo from '../Assets/Cart (1).png';
import '../Styles/CartPage.css';
import CartItem from "../Components/Cart/CartItem";
import { useLocation } from "react-router-dom";

export default function CartPage(props) {


  const cartArr = props.cart.map(item => (<CartItem
      productName = {item.productName}
      productQuantity = {item.productQuantity}
      productPrice = {item.productPrice}
      cart = {props.cart}
  />));


    let sum = 0;
    for(let i=0;i<props.cart.length;i++){
        sum += props.cart[i].productPrice;
    }
    console.log(props.cart);

    return(
    <div className="cartpage-container">
      <Navbar cart = {props.cart}/>
      <div className="cart-title">
        <img className="image-cart" src={cartLogo}></img>
        <p className="title-cart">Cart</p>
      </div>
      {props.cart.length > 0 ? <div className="cart-content">
        <div className="product-cart-info">
          <p className="product-cart-info-p">Product</p>
          <p className="product-cart-info-p">Quantity</p>
          <p className="product-cart-info-p">Price</p>
        </div>
        {cartArr}
        <div className='shipping'>
          <p className='shipping-title'>Shipping: </p>
          <p className='shipping-cost'>{sum < 500 ? 100 : 0}$</p>
        </div>
        <div className='total-cost'>
          <p className='title-cost'>Total cost: </p>
          <p className='cost'>{sum < 500 ? sum+100 : sum}$</p>
        </div>
      </div> : <div className="empty-cart">The cart is empty!Start shopping and explore our products!</div>}
    </div>
  )
}
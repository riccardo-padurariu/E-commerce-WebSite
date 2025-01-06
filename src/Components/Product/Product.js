import { Link } from 'react-router-dom';
import '../../Styles/Product.css';
import React from 'react';

function Product(props) {

  const data = props.cart;

  const [hover,setHover] = React.useState(false);

  const styles = {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: props.type === 'phone' ? '310px' : '380px',
    height: '386px',
    borderRadius: '10px',
    boxShadow: hover ? '0px 0px 15px rgba(4, 0, 87, 0.35)' : " 0 0 0 rgba(0,0,0,0)",
  }

  const imgStyles = {
    marginTop: '20px',
    width: props.type === 'phone' ? '230px' : '320px',
    height: '250px',
    marginLeft: props.type === 'phone' ? '50px' : '30px',
    marginBottom: '10px'
  }

  const buttonStyles = {
    marginBottom: '20px',
    width: '124px',
    height: '34px',
    marginLeft: props.type === 'phone' ? '90px' : '120px',
    backgroundColor: 'rgb(13, 27, 42)',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 29px',
    color: 'white',
    fontSize: '12px',
    fontWeight: '400',
    cursor: 'pointer',
    fontFamily: 'Inter'
  }


  function toggleHover() {
    setHover(prev => !prev);
  }

  function addToCart(item){
    props.setCart(prev => 
      [...prev, 
        item
      ]
    );
  }
  console.log(props.cart);

  const [quantity,setQuantity] = React.useState(1);

  function handleQuantityChange(value){
    setQuantity(value);
  }

  

  return (
    <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} style={styles} className="product-container">
      <img style={imgStyles} className='product-img-grid' src={props.type === 'phone' ? require(`../../Assets/phone_${props.image}.${props.ending}`) : require(`../../Assets/tv_${props.image}.${props.ending}`)}></img>
      <p className="product-name-grid">{props.name}</p>
      <div className='product-info'>
        <p className='product-price-grid'>{props.price}$</p>
        <div className='product-quantity-flexbox'>
          <p className='product-quantity-grid'>Quantity:</p>
          <select onChange={change => handleQuantityChange(change.target.value)} className='product-quantity-selector'>
            <option className='option-product'>1</option>
            <option className='option-product'>2</option>
            <option className='option-product'>3</option>
            <option className='option-product'>4</option>
            <option className='option-product'>5</option>
            <option className='option-product'>6</option>
            <option className='option-product'>7</option>
            <option className='option-product'>8</option>
            <option className='option-product'>9</option>
            <option className='option-product'>10</option>
          </select>
        </div>
      </div>
      <button style={buttonStyles} className='addtocart-button' onClick={() => {
        addToCart({
          productName: props.name,
          productPrice: Number(quantity)*props.price,
          productQuantity: Number(quantity)
        })
      }}>Add to cart</button>
    
    </div>
  );
}

export default Product;
import '../../Styles/CartItem.css';

export default function CartItem(props) {
  return (
    <div className='cart-item-container'>
      <p className='cart-item-p'>{props.productName}</p>
      <div className='quantity-flexbox'>
        <p className='cart-item-p'>{props.productQuantity}</p>
        <p className='change-quantity'>Change quantity</p>
      </div>
      <div className='delete-price'>
        <p className='cart-item-p'>{props.productPrice}$</p>
        <p className='delete-from-cart'>Delete from cart</p>
      </div>
    </div>
  );
}
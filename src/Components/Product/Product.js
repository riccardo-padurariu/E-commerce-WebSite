import '../../Styles/Product.css';

export default function Product(props) {
  return (
    <div className="product-container">
      <img className='product-img-grid' src={props.type === 'phone' ? require(`../../Assets/phone_${props.image}.jpg`) : require(`../../Assets/tv_${props.image}.jpg`)}></img>
      <p className="product-name-grid">{props.name}</p>
      <div className='product-info'>
        <p className='product-price-grid'>{props.price}$</p>
        <p className='product-quantity-grid'>Quantity: 1</p>
      </div>
      <button className='addtocart-button'>Add to cart</button>
    </div>
  );
}
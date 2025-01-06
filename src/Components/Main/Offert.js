import React from "react";
import '../../Styles/Offert.css';

export default function Offert(props) {

  const styles = {
    height: props.isMain ? '705px' : '340px',
    width: props.isMain ? '540px' : '340px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer'
  }

  const styleImage = {
    width : props.isMain ? '330px' : '140px',
    height: props.isMain ? '360px' : '180px',
    marginTop: props.isMain ?  '120px' : '10px'
  }

  return (
    <div style={styles} className="offert-container">
      <img style={styleImage} src={props.type == 'phone' ? require(`../../Assets/phone_${props.id}.${props.ending}`) : require(`../../Assets/tv_${props.id}.${props.ending}`)}></img>
      <p className="product-name">{props.name}</p>
      <p className="product-price">{props.price}$</p>
      <p className="description">{props.description}</p>
      <button className="buynow-button">Buy now</button>
    </div>
  );
}
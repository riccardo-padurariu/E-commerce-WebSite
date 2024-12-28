import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Product from "../Components/Product/Product";
import TVData from '../Data/TVData';
import arrowLeft from '../Assets/Arrow Up Contained 01.png';
import arrowRight from '../Assets/Arrow Up Contained 2.png';
import SlideCount from "../Components/Footer/SlideCount";

export default function TVPage() {

  const arr = TVData.map(item => <Product
    name = {item.name}
    price = {item.price}
    image = {item.image}
    type = 'tv'
    ending = {item.ending}
  />);

  let sliderArr = [];
  let i;
  for(i=1;i<=arr.length/12;i++){
    sliderArr.push(i);
  }

  if(sliderArr.length == 0)
    sliderArr.push(1);

  const TVGridStyle = {
    marginTop: '100px',
    display: 'grid',
    gridTemplateColumns: '380px 380px 380px',
    rowGap: '30px',
    columnGap: '36px'
  }

  const sliderGridStyle = {
    width: '100px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '624px',
    marginTop: '20px'
  }

  const pathStyles = {
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '400',
    color: 'grey',
    marginTop: '32px'
  }

  return (
    <div className="tvspage-container">
      <Navbar />
      <Header
        name = "TV's" 
      />
      <div style={TVGridStyle} className="product-grid">
        {arr}
      </div>
      <div style={sliderGridStyle} className="slider-grid">
        <img src={arrowLeft}></img>
        {sliderArr.map(item =><SlideCount number = {item} />)}
        <img src={arrowRight}></img>
      </div>
      <div style={pathStyles} className="path">
        Home &gt; TV's
      </div>
      <Footer />
    </div>
  );
}
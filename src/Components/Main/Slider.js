import React from "react";
import '../../Styles/Slider.css';
import arrowLeft from '../../Assets/Arrow Up Sm.png';
import arrowRight from '../../Assets/Arrow Up Sm (1).png';

export default function Slider(props) {

  const [index,setIndex] = React.useState(0);

  const sliderContainer = {
    position: 'relative',
    width: '1470px',
    height: '558px',
    backgroundColor: 'white',
    backgroundImage: `url(${props.slides[index].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: 'background-image 0.15s',
    zIndex: '0',
    marginBottom: '110px'
  }

  function goToPrevious(){
    setIndex(prev => prev-1 >= 0 ? prev-1 : props.slides.length - 1);
  }

  function goToNext() {
    setIndex(prev => prev+1 > props.slides.length-1 ? 0 : prev+1);
  }

  function goToIndex(index){
    setIndex(index);
  }

  return (
    <div style={sliderContainer} className="slider-container">
      <p className="title-article">{props.slides[index].title}</p>
      <div onClick={goToPrevious} className="previous-button">
        <img className="arrow-left" src={arrowLeft}></img>
      </div>
      <div onClick={goToNext} className="next-button">
        <img className="arrow-right" src={arrowRight}></img>
      </div>
      <div className="line-container">
        {props.slides.map((slide,slideIndex) => {
          return( 
          <div onClick={() => goToIndex(slideIndex)} key={slideIndex} className="line">
            {/*<div className="tooltip">{slide.title}</div> <- I have to add the tooltip for the slider*/}
          </div>
          );
        })}
      </div>
    </div>
  );
}
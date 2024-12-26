import React from "react";
import '../../Styles/Main.css';
import Slider from "./Slider";
import OffertsGrid from "./OffertsGrid";

export default function Main() {

  const slideImages = [
    {url: "http://localhost:3000/Assets_Public/image_1.jpg", title: "Galaxy AI is here"},
    {url: "http://localhost:3000/Assets_Public/image_2.jpg", title: "The revolution of technology is here"},
    {url: "http://localhost:3000/Assets_Public/image_3.jpg", title: "The best phones out there"},
    {url: "http://localhost:3000/Assets_Public/image_4.jpg", title: "Galaxy AI is now on the SMART TV's"}
  ];

  return (
    <div className="main-container">
      <Slider slides={slideImages}/>
      <OffertsGrid />
    </div>
  );
}
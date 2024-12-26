import React from "react";
import '../../Styles/OffertsGrid.css';
import Offert from "./Offert";

export default function OffertsGrid() {
  return (
    <div className="offertsgrid-container">
      <div className="main-offert">
        <Offert
        isMain = {true} 
        name = 'Samsung S24'
        price = '450'
        description = 'The ultimate technology of 2024 is out now'
        type = 'phone'
        id = {1}
         />
      </div>
      <div className="side-offerts">
        <div className="offerts-row">
        <Offert
        isMain = {false} 
        name = 'Samsung S7'
        price = '80'
        description = 'A new version of the past'
        type = 'phone'
        id = {2}
         />
          <Offert
        isMain = {false} 
        name = 'Samsung Z Flip'
        price = '550'
        description = 'Enjoy the show with the double quality'
        type = 'phone'
        id = {3}
         />
        </div>
        <div className="offerts-row">
        <Offert
        isMain = {false} 
        name = 'Samsung A52'
        price = '150'
        description = 'The A+ series for you'
        type = 'phone'
        id = {4}
         />
          <Offert
        isMain = {false} 
        name = 'Samsung SMART TV 42"'
        price = '450'
        description = 'Enjoy the best films with your family'
        type = 'tv'
        id = {1}
         />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import '../../Styles/Header.css';
import filter from '../../Assets/Filter.png';

export default function Header(props) {
  return (
    <div className="header-container">
      <p className="header-title">{props.name}</p>
      <div className="filter">
        <img className="filter-img" src={filter}></img>
        <p className="filter-p">Filter</p>
      </div>
    </div>
  );
}
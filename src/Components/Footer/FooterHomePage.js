import React from "react";
import '../../Styles/Footer.css';
import searchbar from '../../Assets/Search Normal.png';
import arrow from '../../Assets/Arrow Up Sm (2).png';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="input-footer">
        <p className="caption-footer">
          We can help finding what's perfect for you
        </p>
        <div className="input-background">
          <img src={searchbar} className="searchbar-footer"></img>
          <input className="parent-input-footer" type="text" placeholder="Type a keyword..."></input>
        </div>
      </div>
      <div className="user-footer">
        <div className="newsletter">
          <div className="newsletter-form">
            <p className="newsletter-title">Join our newsletter</p>
            <p className="label">Name</p>
            <input className="input-newsletter" placeholder="Enter your name"></input>
            <p className="label">Email</p>
            <input className="input-newsletter" placeholder="Enter your email"></input>
            <button className="join-button">Join</button>
          </div>
          <div className="copyright">Copyright &#169; 2024 Padurariu Riccardo</div>
        </div>
        <div className="socials">
          <p className="social-title">Join our community</p>
          <a href="https://www.instagram.com/"><div className="social">
            <p className="social-p">Instagram</p>
            <img className="arrow" src={arrow}></img>
          </div></a>
          <a href="https://www.facebook.com/"><div className="social">
            <p className="social-p">Facebook</p>
            <img className="arrow" src={arrow}></img>
          </div></a>
          <a href="https://www.tiktok.com/"><div className="social">
            <p className="social-p">TikTok</p>
            <img className="arrow" src={arrow}></img>
          </div></a>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import searchbar from '../../Assets/Search Normal.png';
import arrow from '../../Assets/Arrow Up Sm (2).png';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="user-footer">
        <div className="newsletter">
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
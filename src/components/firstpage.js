import React from "react";
import "../App.css";
import "./firstpage.css";
import { Link } from "react-router-dom";
import img from '../images/mc3.png'

function HeroSection() {
  return (
    <div className="hero-container">
      <img className = 'img' src={img} width = '400' height='400' alt="img"/>
      <p className = 'first-text'>"몰입캠프는</p>
      <p className = 'second-text'>학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프입니다."</p>

      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
        <ul className="buttons">
          <li>
            <Link to="https://youtu.be/DWGAHwzPs0Q" className="nav-links-mobile">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소개영상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </li>
          <li>
            <Link to="/application" className="nav-links-mobilee">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지원하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;

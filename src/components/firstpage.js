import React from "react";
import "../App.css";
import "./firstpage.css";
import { Link } from "react-router-dom";
import img from '../images/mc3.png'
import firstpagetextimg from '../images/firstpagetext.png'
import leftimg from '../images/left.png'
import rightimg from '../images/right.png'

function HeroSection() {
  return (
    <div className="hero-container">
      <img className = 'img' src={img} width = '420' height='420' alt="img"/>
      <img className = 'firstpagetextimg' src={firstpagetextimg}/>
      <img className = 'leftimg' src = {leftimg}/>
      <img className = 'rightimg' src = {rightimg} />
      {/* <p className = 'first-text'>"몰입캠프는</p>
      <p className = 'second-text'>학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프입니다."</p> */}

      <div className="hero-btns">
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

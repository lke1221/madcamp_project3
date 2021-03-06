import React from "react";
import "../App.css";
import "./firstpage.css";
import { Link } from "react-router-dom";
import img from '../images/mc3.png'
import firstpagetextimg from '../images/firstpagetext.png'
import leftimg from '../images/left.png'
import rightimg from '../images/right.png'
import Footer from "./footer";

function HeroSection() {
  return (
    <div className="hero-container">
      <img className = 'img' src={img} alt="img"/>
      <img className = 'firstpagetextimg' src={firstpagetextimg}/>
      <img className = 'leftimg' src = {leftimg}/>
      <img className = 'rightimg' src = {rightimg} />
      {/* <p className = 'first-text'>"몰입캠프는</p>
      <p className = 'second-text'>학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프입니다."</p> */}

      <div className = 'firstbutton'>
      <Footer.Link
                href="https://www.youtube.com/watch?v=DWGAHwzPs0Q"
                target="_blank"
              >
            <button type='button' style={{height:"200%", width:"300%",
                                                                fontSize: '20px',
                                                                backgroundColor: "black",
                                                                borderColor:"white",
                                                                color: "white",
                                                                borderRadius:".50rem",
                                                                position:'relative'}}>소개영상</button>
      </Footer.Link>
      </div>
      <div className = 'secondbutton'>
        <Link to="/application">
        <button type='button' style={{height:"200%", width:"300%",
                                                                fontSize: '20px',
                                                                backgroundColor: "white",
                                                                borderColor:"white",
                                                                color: "black",
                                                                borderRadius:".50rem",
                                                                position:'relative'}}>지원하기</button>
        </Link>
      </div>
      

      <div className="hero-btns">
        <ul className="buttons">
          {/* <li>
            <Link to="https://youtu.be/DWGAHwzPs0Q" className="nav-links-mobile">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소개영상&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </li> */}
          {/* <li>
            <Link to="/application" className="nav-links-mobilee">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지원하기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;

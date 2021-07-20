import React from "react";
import "../App.css";
import "./introduction.css";
import Cards from "./card";
import Cards2 from "./card2";
import { Link } from "react-router-dom";
import ryu from "../images/lecturer-ryu.jpg";
import jang from "../images/lecturer-chang.jpg"
import two from "../images/2.jpg";
import three from "../images/3.jpg";

function Introduction() {
  function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }

  function handleScroll() {
    const elems = document.querySelectorAll(".up-on-scroll");
    elems.forEach((elem) => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = "translateY(70px)";
      } else {
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0px)";
      }
    });
  }
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="body" id="introduction5">
        <h1 style={{marginBottom: 40, marginTop: 50}}>강&nbsp;사&nbsp;진</h1>
        <div className="lecturer">
            <div style={{marginRight: 40}}>
                <img src={jang} style={{height:100, width:100, marginBottom: 10}}/>
                <h1 style={{marginBottom: 10}}>장병규</h1>
                <h2 style={{marginBottom: 10}}>크래프톤 이사회 의장</h2>
                <p style={{marginBottom: 10}}>4차산업혁명위원회 위원장 (2017-2019)</p>
                <p style={{marginBottom: 10}}>본엔젤스 공동창업 (2008-2017)</p>
                <p style={{marginBottom: 10}}>블루홀 공동창업 (2007-2018), 크래프톤 이사회 의장 (2018-)</p>
                <p style={{marginBottom: 10}}>첫눈 창업 (2005), NHN에 첫눈 매각 (2006)</p>
                <p style={{marginBottom: 10}}>네오위즈 공동창업 (1996-2005)</p>
                <p style={{marginBottom: 10}}>KAIST 전산학과 (입학 1991, 박사 수료 1999)</p>
            </div>
            <div style={{marginLeft: 40}}>
                <img src={ryu} style={{height:100, width:100, marginBottom: 10}}/>
                <h1 style={{marginBottom: 10}}>류석영</h1>
                <h2 style={{marginBottom: 10}}>KAIST 전산학부 교수</h2>
                <p style={{marginBottom: 10}}>KAIST 전산학부 학부장 (2021-)</p>
                <p style={{marginBottom: 10}}>KAIST 포용성 위원회 위원장 (2017-)</p>
                <p style={{marginBottom: 10}}>Sun Microsystems 연구원 (2005-2009)</p>
                <p style={{marginBottom: 10}}>Harvard University 연구원 (2001-2005)</p>
                <p style={{marginBottom: 10}}>KAIST 전산학과 (입학 1991, 박사 2001)</p>
            </div>
        </div>
      </div>
      <p></p>
    </>
  );
}

export default Introduction;
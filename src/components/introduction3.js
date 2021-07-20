import React from "react";
import "../App.css";
import "./introduction.css";
import Cards from "./card";
import Cards2 from "./card2";
import { Link } from "react-router-dom";
import { GoTextSize } from "react-icons/go";

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
      <div className="body" id="introduction3">
        <Cards />
        {/* <h1>후기</h1>
        <Cards2 /> */}
      </div>

      <Link to="/history">
            <button type='button' className='button' style={{height:"50px", width:"20%",
                                                                marginLeft:'40%',
                                                                marginRight:'40%',
                                                                marginTop:'-100px',
                                                                fontSize: '100%',
                                                                backgroundColor: "black",
                                                                color: "white",
                                                                borderRadius:".50rem",
                                                                alignItems:'center',
                                                                justifyContent: 'center',
                                                                position:'relative'}}>몰입캠프 후기 보기</button>
        </Link>

    </>
    
  );
}

export default Introduction;

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
      <div style={{ textAlign: "center"}}>
        <Link to="/history">몰입캠프 후기 보기</Link>
      </div>
    </>
  );
}

export default Introduction;

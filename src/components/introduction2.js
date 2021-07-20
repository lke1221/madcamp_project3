import React from "react";
import "../App.css";
import "./introduction.css";
import Cards from "./card";
import Cards2 from "./card2";

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
      <div className="body" id="introduction2">
        <h1>목적</h1>
        <p className="text">
          본 코스의 목표는, 참가한 학생들의 성장과 참가자들의 네트워킹입니다.
          2~3명이 한 팀을 이루어 앱(서비스)을 기획하고 개발합니다. 팀과
          협업하면서, 스스로 학습하고 성장하는 것, 그래서 실제 필드에서 개발을
          시작할 수 있는 기본적인 경험과 태도를 갖추는 것을 지향합니다. 또한,
          스타트업 창업자들의 특강과 교류를 통해서 본인의 태도와 삶을 돌아보는
          것도 지향합니다.
        </p>
      </div>
    </>
  );
}

export default Introduction;

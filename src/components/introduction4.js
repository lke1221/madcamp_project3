import React from "react";
import "../App.css";
import "./introduction.css";
import Cards from "./card";
import Cards2 from "./card2";
import { Link } from "react-router-dom";

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
      <div className="body" id="introduction4">
        <h1>역사</h1>
        <p className="text">
          몰입캠프는 2010년 본엔젤스의 매드캠프에서 시작되었습니다. 매드캠프는
          ‘Mobile Application Development Camp’의 약자로 모바일 앱 개발에 관심
          있는 학생들이 모여 함께 프로젝트를 하며 빠르게 성장하는 합숙
          캠프입니다. 2010년 겨울학기에 1기 모집을 시작으로 9기까지
          운영되었으며, 오랜 기간 운영 경험과 노하우를 통해 최적의 프로그래밍
          캠프로 발전해 왔습니다. 학생들의 성원에 힘입어, 더 많은 학생들에게
          캠프 참여의 기회를 제공하고자, 2015년 겨울부터 KAIST 전산학부와
          협업하여 몰입캠프로 그 명성을 이어가고 있습니다. 2017년 겨울학기부터
          타 대학으로 지원 범위를 넓히고, 2018년 여름학기에는 해외 대학으로
          모집을 확대하여 국내외 다양한 학생들이 참여하고 있습니다. 몰입캠프는
          다년간의 운영 경험으로 개선과 발전을 거듭하였으며, 앞으로도 학생들에게
          유익한 캠프가 되도록 지속적으로 노력하고 성장해 나갈 것입니다.
        </p>
      </div>
      <p></p>

      <Link to="/realhistory">
            <button type='button' className='button' style={{height:"40px", width:"14%",
                                                                marginLeft:'43%',
                                                                marginTop:'5%',
                                                                marginRight:'43%',
                                                                fontSize: '100%',
                                                                backgroundColor: "black",
                                                                color: "white",
                                                                borderRadius:".50rem",
                                                                alignItems:'center',
                                                                justifyContent: 'center',
                                                                position:'relative'}}>역사 더보기</button>
        </Link>

      {/* <div style={{ textAlign: "center" }}>
        <Link to="/realhistory">See more..</Link>
      </div> */}
    </>
  );
}

export default Introduction;

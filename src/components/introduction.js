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
      <div className="body" id="introduction">
        <h1>몰입캠프는</h1>
        <p className="text">
          학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프입니다.
        </p>
        <p className="text">
          스타트업이던, 대기업이던, 중견기업이던, 항상 좋은 인재들이 모자란다고
          합니다. 공대생들은 각박한 공부와 경쟁 속에서 지쳐가는 것 같은데, 왜
          그럴까요? 본 코스를 통해서, 다양한 학생들과 함께 자율적으로 개발
          경험을 쌓으면서 개발 실력의 향상과 스스로 성장해 나가는 모습을
          발견해보세요. 그리고 이런 집중 성장의 경험은 참가자들의 삶에 커다란
          긍정적 영향을 끼칩니다. 또한, 여러 스타트업 창업자들의 강연을 통해서,
          본인의 삶을 온전히 느낄 수 있는 스타트업의 매력도 접할 수 있으며,
          스스로의 삶에 대해서 한 번쯤 돌아보고 방향성을 고민해 볼 수 있는
          기회를 제공합니다. 비슷한 교육을 받은 사람들이 비슷한 방식으로 가치를
          창출하는 비중은 점점 줄어들고, 다양한 사고방식과 경험을 가진 사람들이
          함께 어우러져 가치를 창출하는 비중이 점점 늘어날 것이라 믿습니다.
          몰입캠프와 함께 집중적으로 개발 경험을 쌓으면서, 본인의 삶을 돌아보지
          않으시겠습니까?
        </p>
      </div>
    </>
  );
}

export default Introduction;

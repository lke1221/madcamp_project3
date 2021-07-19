import React from "react";
import "./card.css";
import CardItem from "./carditems";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>WHY?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text1="함께하는 즐거움"
              src={one}
              alt="one"
              text2="비슷한 부류의 다른 사람들과 함께 하면 즐겁겠죠? 또한, 당연히 혼자 하는 것보다 함께 하는 것이 빠르게 학습하고 성장할 수 있습니다"
            />
            <CardItem
              src={two}
              alt="two"
              text2="열정을 가진 사람들과 함께 하는 과정에서는, 평소 느끼기 힘든 몰입의 즐거움이 생깁니다. 주당 80~100시간씩 개발을 해도 즐거운 상태. 정말 이해하기 힘든 그런 경험을 느껴보고 싶지 않으세요?"
              text1="몰입하는 즐거움"
            />
            <CardItem
              src={three}
              alt="three"
              text2="대학에서는 스타트업, 대기업, 연구소 등과 같은 삶의 여러 형태에 대해서 경험하기 어렵습니다. 본 코스를 통해서, 스타트업이나 창업이라는, 혹은 본인의 일에 온전히 매진하는 삶을 간접적으로 경험해보세요."
              text1="삶의 한 형태를 경험"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

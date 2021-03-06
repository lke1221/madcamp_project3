import React from "react";
import "./card.css";
import CardItem from "./carditem2";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text1="윤OO KAIST 19학번"
              text2="인생에서 이렇게 다시 열심히 살 수 있을까 생각한 한달이었습니다. 캠프를 통해 많은 지식을 배운 것도 있지만, 무엇보다 그런 지식을 배우는 법을 배워가는 것 같습니다. 특히 프로그래밍같은 분야는 새로운 것을 얼마나 빠르게 받아들이느냐가 가장 중요한 척도라고 생각을 하는데 그런 면에 있어서 스스로 성장하는 법을 배워간 것 같습니다."
            />
            <CardItem
              text1="오OO 숙명여대 17학번"
              text2="4.5주간 참 많은 행복한 일들이 있었지만 무엇보다도 몰입캠프가 아니었다면 쉽게 접하지 못했을 유익한 강연을 매주 듣고, 멋진 사람들과 협업하고, 계획을 공유하면서, 앞으로 어떻게 살아가야 하는지 삶의 방향성에 대해 깊게 고민해 볼 계기를 얻은 것이 가장 큰 선물이라고 생각합니다."
            />
            <CardItem
              text1=" 박OO 퀸즐랜드대학 18학번"
              text2="여러 프로젝트를 접하고 나서 제가 무엇을 더 잘하고, 더 좋아하는지 깨닫게 되었습니다. 스타트업에는 관심이 적었던 저에게 스타트업의 꿈을 갖게 해주는 계기도 되었습니다. 대학 졸업 후 취직만 꿈꾸던 저에게 다른 여러 길들이 있고, 그 길들을 제가 스스로 개척하며 나아갈 수 있는 용기를 주었습니다."
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              text1="이OO 고려대 17학번"
              text2="열정 있는 다양한 사람들을 만나고, 그 사람들과 함께 작업할 수 있었기에 더욱 재미있었던 4.5주였다. 다 같이 열정 넘치게 프로젝트를 진행했기에 스크럼에서도 끊임없이 이야기가 오갈 수 있었고, 더욱더 몰입해서 개발할 수 있었다. 또한 다른 사람들이 열정적으로 프로젝트를 완성하려 개발하는 것은 나에게 동기부여가 되기도 했다."
            />
            <CardItem
              text1="진OO 성균관대 16학번"
              text2="가장 크게 배운 것은 협업의 힘이었습니다. 팀원은 물론이고 분반 구성원들과 함께 많은 것을 고민하고 나누는 것이 자극제가 되어 다양한 시도들을 성공할 수 있었습니다. 친구들과 함께 고민하니 금방 해결할 수 있었고, 이것이 거름이 되어 훨씬 더 많은 것들을 구현할 수 있었습니다."
            />
            <CardItem
              text1="정OO 한양대 15학번"
              text2="몰입캠프를 하면서 행복한 기억들이 많다. 새벽까지 함께 코딩을 하고 야식을 먹으면서 서로 학교생활을 나눈 것, [...] 멋진 기업가들의 강연을 들으며 나도 할 수 있다고 가슴 뛰던 시간들, 하지만 가장 행복한 점은 한 단계 성장한 나의 모습을 볼 수 있있다는 것, 그리고 나를 잘 알 수 있는 시간이었다는 것이다."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

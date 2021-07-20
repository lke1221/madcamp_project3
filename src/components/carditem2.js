import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text1}</h5>
          </div>
          <div className="cards__item__info">
            <p className="cards__item__text">{props.text2}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;

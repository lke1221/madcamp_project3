import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text1}</h5>
          </div>
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" src={props.src} />
          </figure>
        </div>
      </li>
    </>
  );
}

export default CardItem;

import React from "react";
import "../App.css";
import "./firstpage.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="title">ㅁㅇ </h1>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h1 className="title">ㅋㅍ</h1>

      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
        <ul className="buttons">
          <li>
            <Link
              to="https://youtu.be/DWGAHwzPs0Q"
              className="nav-links-mobile"
            >
              소개영상
            </Link>
          </li>
          <p></p>
          <p></p>

          <li>
            <Link to="/application" className="nav-links-mobilee">
              지원하기
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;

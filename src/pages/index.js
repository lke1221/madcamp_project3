import React, { useState, useEffect } from "react";
import "./Home.css";
import "../App.css";
import Introduction from "../components/introduction";
import Introduction2 from "../components/introduction2";
import Introduction3 from "../components/introduction3";
import Introduction4 from "../components/introduction4";
import Introduction5 from "../components/introduction5";
import History from "./history";
import Firstpage from "../components/firstpage";
import { Link } from "react-scroll";

const Home = () => {
  const [bar, setBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

  useEffect(() => {
    changeBackground();
  }, []);

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className={bar ? "after" : "before"}>
        <Link
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          style={{
            color: "white",
            marginLeft: 90,
            marginRight: 100,
            cursor: "pointer",
          }}
        >
          개요
        </Link>
        {/* <div className="purpose"> */}
        <Link
          activeClass="active"
          to="introduction2"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          style={{ color: "white", marginRight: 100, cursor: "pointer" }}
        >
          목적
        </Link>
        {/* </div> */}
        <Link
          activeClass="active"
          to="introduction3"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          style={{ color: "white", marginRight: 100, cursor: "pointer" }}
        >
          WHY?
        </Link>

        <Link
          activeClass="active"
          to="introduction4"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          style={{ color: "white", marginRight: 100, cursor: "pointer" }}
        >
          HISTORY
        </Link>

        <Link
          activeClass="active"
          to="introduction5"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          style={{ color: "white", marginRight: 100, cursor: "pointer" }}
        >
          LECTURER
        </Link>
      </div>

      <Firstpage />

      <Introduction />
      <Introduction2 />
      <Introduction3 />
      <Introduction4 />
      <Introduction5 />
    </>
  );
};

export default Home;

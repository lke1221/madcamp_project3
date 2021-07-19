import React, { useState, useEffect } from "react";
import "./Home.css";
import "../App.css";
import Introduction from "../components/introduction";
import Firstpage from "../components/firstpage";
import Contactus from "../components/contactus";
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
          offset={-80}
          duration={500}
          style={{ color: "white", marginRight: 10 }}
        >
          Your name
        </Link>
        <Link
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ color: "white" }}
        >
          Your name
        </Link>
        <Link
          activeClass="active"
          to="introduction"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          style={{ color: "white" }}
        >
          Your name
        </Link>
      </div>

      <Firstpage />

      <Introduction />

      <Contactus />
    </>
  );
};

export default Home;

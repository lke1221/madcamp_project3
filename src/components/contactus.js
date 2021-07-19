import React from "react";
import "../App.css";
import { Button } from "./Navbar/Button";
import "./firstpage.css";
import { Link } from "react-router-dom";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

function HeroSection() {
  return (
    <div className="hero-container">
      <p>강사진</p>
      <p>contact us</p>
      <p>최효영 : cs496.ipc@gmail.com</p>
      <p>후원</p>
      <p className="since">Since 2010</p>
    </div>
  );
}

export default HeroSection;

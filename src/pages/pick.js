import React, { useState, Component } from "react";

import PostList from "./PostList";
import axios from "axios";
import { Link } from "react-router-dom";
import firebaseInit from "../firebaseInit";
//import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";
import ReactDom from "react-dom";
import Popup from "reactjs-popup";

const Pick = ({ children }) => {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //       isOpenPopup: false,
  //   }

  //   this.openPopup = this.openPopup.bind(this);
  //   this.closePopup = this.closePopup.bind(this);
  // }

  const [isOpenPopup, setIsOpenPopup] = useState("false");

  const openPopup = () => {
    setIsOpenPopup("true");
  };

  const closePopup = () => {
    setIsOpenPopup("false");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "row",
        paddingTop: 80,
        //paddingLeft: 400,
        //paddingRight: 400
      }}
    >
      <div style={{ width: 900, height: 450 }}>
        <h1 style={{ marginBottom: 50, fontSize: 30 }}>역대 금주의 PICK!</h1>
        {isOpenPopup ? (
          <div style={{ alignItems: "center" }}>
            <Popup
              trigger={
                <button
                  className="new-notice"
                  style={{ marginTop: 20, fontSize: 20 }}
                  onClick={
                    window.sessionStorage.getItem("position") === "admin"
                      ? openPopup
                      : () => alert("관리자만 글을 작성할 수 있습니다.")
                  }
                >
                  Add
                </button>
              }
            >
              <PopUpContent />
            </Popup>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Pick;

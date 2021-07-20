import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";
import { Link } from "react-router-dom";
//import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";
import ReactDom from "react-dom";
import Popup from "reactjs-popup";

import { firestore } from "../firebaseInit";

const Pick = ({ children }) => {
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
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 80,
        // paddingLeft: 400,
        // paddingRight: 400,
      }}
    >
      <h1 style={{ marginBottom: 50, fontSize: 30 }}>역대 금주의 PICK!</h1>
      {isOpenPopup ? (
        <div style={{ alignItems: "center" }}>
          <Popup
            trigger={
              <button
                className="submit"
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
      <div style={{ width: 900, height: 450 }}></div>
    </div>
  );
};

export default Pick;

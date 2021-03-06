import React, { useState, useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";
import { Link } from "react-router-dom";
//import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";
import ReactDom from "react-dom";
import Popup from "reactjs-popup";
import Card from "../components/carditem3";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

import { firestore } from "../firebaseInit";

const Pick = ({ children }) => {
  const [isOpenPopup, setIsOpenPopup] = useState("false");

  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    axios.get('http://172.10.18.166:80/getpicks').then((response)=>{
      setDataList(response.data);
      console.log(response.data);
  });
  }, [ ])

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
                style={{ marginTop: 20, fontSize: 20, marginLeft:220, marginBottom: 50}}
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
          <div style={{flexDirection:"column"}}>
          {dataList ? 
          dataList.map((item, index) => <Card text1={item.title} src={item.url}/>) : ''}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div style={{ width: 900, height: 450 }}></div>
      <ScrollUpButton />
    </div>
  );
};

export default Pick;

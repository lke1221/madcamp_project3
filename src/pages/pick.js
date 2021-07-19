import React, { useEffect } from "react";
import PostList from "./PostList";
import axios from "axios";
import { Link } from "react-router-dom";

const Pick = ({ history }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 80,
        //paddingLeft: 400,
        //paddingRight: 400
      }}
    >
      <div style={{ width: 900 }}>
        <h1 style={{ marginBottom: 50, fontSize: 30 }}>역대 금주의 PICK!</h1>

        <button
          className="new-notice"
          style={{ marginTop: 20, fontSize: 20 }}
          onClick={
            window.sessionStorage.getItem("position") === "admin"
              ? () => history.push("/newnotice")
              : () => alert("관리자만 글을 작성할 수 있습니다.")
          }
        >
          Add
        </button>
        {/*</Link>*/}
      </div>
    </div>
  );
};

export default Pick;
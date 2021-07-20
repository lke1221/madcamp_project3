import React, { useState } from "react";
import "./newnotice.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import moment from "moment";

const NewPick = ({ history }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const submitReview = () => {
    console.log(post.title);
    axios
      .post("http://172.10.18.166:80/sendNotice", {
        title: post.title,
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
        content: post.content,
        hit: 0,
        name: window.sessionStorage.getItem("name"),
      })
      .then((response) => {
        alert("등록 완료!");
        console.log(response.data);
        history.push("/notice");
      });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      title: value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 30,
      }}
      id="popup"
    >
      <h1 style={{ marginBottom: 50 }}>New Pick!</h1>
      <input
        className="popup-input"
        type="text"
        placeholder="title"
        style={{ width: 50 }}
        onChange={getValue}
      />

      <label
        for="file"
        style={{
          color: "white",
          textAlign: "center",
          justifyContent: "center",
          width: 400,
          height: 400,
          backgroundColor: "silver",
          fontSize: 350,
        }}
      >
        +
      </label>
      <input style={{ display: "none" }} type="file" id="file" />
      <button className="submit" onClick={submitReview}>
        등록
      </button>
    </div>
  );
};

export default NewPick;

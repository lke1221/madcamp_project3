import React, { useState, useEffect } from "react";
import "./newnotice.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import moment from "moment";
import { storage } from "../firebaseInit";


const NewPick = ({ history }) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const change = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  }
  

  // const getAllPicks = () => {
  //   axios.get('http://172.10.18.166:80/getpicks').then((response)=> {
  //     console.log(response.data);
  //     setDataList(response.data);
  //   });
  // }

  const submitReview = () => {
    const image_upload = storage.ref(`images/${image.name}`).put(image);
    image_upload.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );

    console.log(title);
    console.log(url);

    axios.post('http://172.10.18.166:80/uploadpicks', {
            title: title,
            url: url,
        }).then((response)=>{
            console.log(response);
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
        paddingTop: 10,
      }}
      id="popup"
    >
      <h1 style={{ marginBottom: 20 }}>New Pick!</h1>
      <input
        className="popup-input"
        type="text"
        placeholder="title"
        style={{ width: 50, marginBottom: 10 }}
        onChange={titleChange}
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
      <input
        style={{ display: "none" }}
        type="file"
        id="file"
        onChange={change}
      />
      <button
        style={{ marginTop: 15, marginBottom: 15 }}
        className="submit"
        onClick={submitReview}
      >
        등록
      </button>
    </div>

    


  );
};

export default NewPick;
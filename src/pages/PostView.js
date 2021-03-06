import React, { useEffect, useState } from 'react';
import { getPostByNo } from './postData';
import './Post.css';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import { Link } from 'react-router-dom'
import Footer from "../components/footer"

const PostView = ({ history, location, match }) => {
  const [ data, setData ] = useState({});

  const { no } = match.params;

  useEffect(() => {
    axios.post('http://172.10.18.166:80/getNoticeOne', {no: no}).then((response)=>{
            setData(response.data[0]);
        });
  }, [ ]);

  /*useEffect(() => {
    setData(getPostByNo(no));
  }, [ ]);*/
  
  const editPost = () => {
    if(window.sessionStorage.getItem('position')=='admin'){
      history.push({
        pathname: '/editnotice',
        state:{title: data.title, detail: data.content, hit: data.hit, name: data.name, no: data.no}
      })
    }
    else{
      alert("권한이 없습니다.");
    }
  };

  const deletePost = () => {
    if(window.sessionStorage.getItem('position')=='admin'){
      if(window.confirm("정말 삭제하시겠습니까?")){
        console.log("삭제");
      }
    }
    else{
      alert("권한이 없습니다.");
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 80,
        //paddingLeft: 400,
        //paddingRight: 400
      }}
    >
    <div style={{width: 900}}>
      <h1 style={{marginBottom: 50, fontSize: 30}}>Notice</h1>

      <div className="post-view-wrapper">
        {
          data ? (
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
                <label>{ data.no }</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>{ data.title }</label>
              </div>
              <div className="post-view-row">
                <label>작성자</label>
                <label>{ data.name }</label>
              </div>
              <div className="post-view-row">
                <label>작성일</label>
                <label>{ data.date }</label>
              </div>
              <div className="post-view-row">
                <label>조회수</label>
                <label>{ data.hit }</label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                  {
                    ReactHtmlParser(data.content+"")
                  }
                </div>
              </div>
              <div className="post-view-row">
                <label>첨부파일</label>
                <Footer.Link href={data.url} download><label>{ data.filename }</label></Footer.Link>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <div alignItems="center">
            <button className="edit-button" onClick={editPost}>수정</button>
            <button className="delete-button" onClick={deletePost}>삭제</button>
            <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PostView;
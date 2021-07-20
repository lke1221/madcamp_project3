import React, { useEffect } from 'react';
import './newnotice.css'
import PostList from './PostList';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const Notice = ({history}) => {
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
        <h1 style={{marginBottom: 50, fontSize: 30}}>Notice</h1>
        <div style={{width: 900, height: 450}}>
          <PostList />
        </div>
          <button className="submit-button" style={{marginTop: 20,
                                          fontSize: 20}}
                                        onClick={(window.sessionStorage.getItem('position')==='admin')? ()=>history.push('/newnotice')
                                        : ()=>alert('관리자만 글을 작성할 수 있습니다.')}>작성하기</button>
        <ScrollUpButton />
    </div>
  );
};

export default Notice;
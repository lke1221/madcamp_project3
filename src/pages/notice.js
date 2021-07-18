import React, { useEffect } from 'react';
import PostList from './PostList';
import axios from 'axios';

const Notice = () => {

  // useEffect(()=>{
  //   //get Notice data
  //   axios.get('http://localhost:3008/getNotice').then((response)=>{
  //       console.log(response.data);
  //       response.data.forEach(e => {
  //         console.log(e.no);
  //         console.log(e.title);
  //         console.log(e.date);
  //         console.log(e.content);
  //         console.log(e.hit);
  //         console.log(e.name);
  //       });
  //   });
  // })

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
        <PostList />
      </div>
    </div>
  );
};

export default Notice;
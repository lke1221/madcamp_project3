import React from 'react';
import PostList from './PostList';

const Notice = () => {
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
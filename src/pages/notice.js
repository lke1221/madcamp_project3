import React from 'react';
import PostList from './PostList';
import { Link } from 'react-router-dom'

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
      <div style={{width: 900}}>
        <h1 style={{marginBottom: 50, fontSize: 30}}>Notice</h1>
        <PostList />
        <Link to="/newnotice">
          <button className="new-notice" style={{marginTop: 20,
                                          fontSize: 20}}>작성하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Notice;
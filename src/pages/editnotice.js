import React, { useState } from 'react';
import './newnotice.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import moment from 'moment';
import {useLocation} from 'react-router-dom';

const EditNotice = ({history}, props) => {

  const location = useLocation();

  const [post, setPost] = useState({
    title:'',
    content:''
  })
  
  const submitReview = ()=>{
    console.log(post.title);
    axios.post('http://localhost:3008/editNotice', {
            title: post.title,
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
            content: post.content,
            hit: location.state.hit,
            name: location.state.name
        }).then((response)=>{
            alert('수정 완료!');
            console.log(response.data);
            history.push('/notice');
        });

    // Axios.post('http://localhost:3008/insert', {
    //   title: post.title,
    //   content: post.content,
    //   name: "이권은"

    // }).then(()=>{
    //   alert('등록 완료!');
    // })
  };

  const getValue = e => {
    const {name, value} = e.target;
    setPost({
      ...post,
      title: value
    })
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 80,
      }}
    >
        <div style={{width: 900}}>
            <h1>Edit</h1>
            <div className='form-wrapper'>
              <input className="title-input" type='text' placeholder='제목' onChange={getValue} value={location.state.title}/>
              <CKEditor
                editor={ClassicEditor}
                data={location.state.detail}
                onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setPost({
                  ...post,
                  content: data
                })
              }}
              onBlur={(event, editor) => {
                //console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                //console.log('Focus.', editor);
              }}
              />
            </div>
            <button className="submit-button" onClick={submitReview}>입력</button>
        </div>
    </div>
  );
};

export default EditNotice;
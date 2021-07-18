import React, { useState } from 'react';
import './newnotice.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

const NewNotice = () => {

  const [post, setPost] = useState({
    title:'',
    content:''
  })
  
  const submitReview = ()=>{
    Axios.post('http://localhost:3008/insert', {
      title: post.title,
      content: post.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  const getValue = e => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value
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
            <h1>New Notice</h1>
            <div className='form-wrapper'>
              <input className="title-input" type='text' placeholder='제목' onChange={getValue}/>
              <CKEditor
                editor={ClassicEditor}
                data="내용을 입력하세요"
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
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
              />
            </div>
            <button className="submit-button" onClick={submitReview}>입력</button>
        </div>
    </div>
  );
};

export default NewNotice;
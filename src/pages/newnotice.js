import React, { useState } from 'react';
import './newnotice.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import moment from 'moment';


const NewNotice = ({history}) => {

  const [post, setPost] = useState({
    title:'',
    content:''
  })

  // const [file, setFile] = useState();
  // const [fileName, setFileName] = useState("")
  
  const submitReview = ()=>{
    // console.log(file);
    // const data = new FormData();
    // data.append('file', file)

    // axios.post('http://172.10.18.166:80/sendFileToNotice', data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   }
    // }).then((response)=>{
    //           console.log('file upload success');
    //         });

    axios.post('http://172.10.18.166:80/sendNotice', {
            title: post.title,
            date: moment().format("YYYY-MM-DD HH:mm:ss"),
            content: post.content,
            hit: 0,
            name: window.sessionStorage.getItem('name')
        }).then((response)=>{
            alert('등록 완료!');
            console.log(response.data);
            history.push('/notice');
        });
  };

  const getValue = e => {
    const {name, value} = e.target;
    setPost({
      ...post,
      title: value
    })
  };

  // const fileUpload = (e) => {
  //   const file = e.target.files[0];
  // }

  // const onFileUpload = e => {
  //   setPost({
  //     ...post,
  //     file: e.target.file[0]
  //   })
  //   //console.log(e.target.files[0])
  // }

  // const saveFile = (e) => {
  //   console.log(e.target);
  //   setFile(e.target.file[0]);
  //   setFileName(e.target.file[0].name);
  // };

  // const uploadFile = async (e) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("fileName", fileName);
  //   try {
  //     const res = await axios.post(
  //       "http://172.10.18.166:80/sendFileToNotice",
  //       formData
  //     );
  //     console.log(res);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

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
          <h1>New Notice</h1>
          <div style={{width: 900, alignItems: 'center', justifyContent:'center'}}>
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
                //console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                //console.log('Focus.', editor);
              }}
              />
              <input type='file'/>
            </div>  
        </div>
        <button className="submit-button" onClick={submitReview}>입력</button>
    </div>
  );
};

export default NewNotice;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import { postList } from './postData';
import axios from 'axios';

const PostList = props => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3008/getNotice').then((response)=>{
      //console.log(response.data);
      // response.data.forEach(e => {
      //   console.log(e.no);
      //   console.log(e.title);
      //   console.log(e.date);
      //   console.log(e.content);
      //   console.log(e.hit);
      //   console.log(e.name);
      // });
      setDataList(response.data);
  });

    
  }, [ ])

  return (
    <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn>
                  <Link to={`/postView/${item.no}`}>{ item.title }</Link>
                </CommonTableColumn>
                <CommonTableColumn>{ item.date }</CommonTableColumn>
                <CommonTableColumn>{ item.hit }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
  )
}

export default PostList;
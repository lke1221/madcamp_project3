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
    axios.get('http://172.10.18.166:80/getNotice').then((response)=>{
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
import React, { useState, useEffect } from 'react';
import Text from 'react-text';
import CommonTable from '../components/table2/CommonTable';
import CommonTableColumn from '../components/table2/CommonTableColumn';
import CommonTableRow from '../components/table2/CommonTableRow';
import { recruitData } from './recruitData';
import axios from 'axios';

const Application = () => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    setDataList(recruitData);
  }, [ ])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div style={{width: 900}}>
      <h1 style={{marginBottom: 50, fontSize: 30}}>Application</h1>
      <CommonTable headersName={['', '']}>
        {
          dataList ? dataList.map((item, index) => {
            const text = item.detail;
            const newText = text.split('\n').map(str => <p>{str}</p>);
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.condition }</CommonTableColumn>
                <CommonTableColumn><Text>{ newText }</Text></CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      </div>
    </div>
  );
};

export default Application;
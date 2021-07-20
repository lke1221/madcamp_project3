import React, { useState, useEffect } from 'react';
import CommonTable from '../components/table2/CommonTable';
import CommonTableColumn from '../components/table2/CommonTableColumn';
import CommonTableRow from '../components/table2/CommonTableRow';
import { historyData } from './historyData';
import axios from 'axios';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const RealHistory = () => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    setDataList(historyData);
  }, [ ])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
      }}
    >
      <div style={{width: 900}}>
      <h1 style={{marginBottom: 50, fontSize: 30}}>연&nbsp;&nbsp;혁</h1>
      <CommonTable headersName={['', '']}>
        {
          dataList ? dataList.map((item, index) => {
            const text = item.detail;
            const newText = text.split('\n').map(str => <p>{str}</p>);
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.condition }</CommonTableColumn>
                <CommonTableColumn>{ newText }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default RealHistory;
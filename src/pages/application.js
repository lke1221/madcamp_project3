import React, { useState, useEffect } from 'react';
import CommonTable from '../components/table2/CommonTable';
import CommonTableColumn from '../components/table2/CommonTableColumn';
import CommonTableRow from '../components/table2/CommonTableRow';
import { recruitData } from './recruitData';
import "./application.css";
import axios from 'axios';

const Application = () => {
  const [ dataList, setDataList ] = useState([]);

  useEffect(() => {
    setDataList(recruitData);
  }, [ ])

  return (
    <div
      className = "wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 80,
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
                <CommonTableColumn>{ newText }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
      <h1 style={{marginTop: 150, marginBottom: 50, fontSize: 30}}>Guide</h1>
      <div className="wrapper">
      <p style={{fontSize: 17, lineHeight: 2}}>지원서 항목은 인적 사항, 대학 전공, 대학 생활, 기타의 4개 섹션으로 구성됩니다.</p>
      <p style={{fontSize: 17, lineHeight: 2}}>몰입캠프를 진행해 오면서, 캠프의 성공 요인은 학생들의 '공통성'과 '다양성'의 균형을 적절히 맞추는 것에 있었습니다. 이런 구성원이 모여 서로 협력하며 빠르게 학습하고 성장할 수 있습니다.</p>
      <p style={{fontSize: 17, lineHeight: 2}}>'공통성'은 태도, 의지, 열정, 협업 등이고, '다양성'은 학번, 성별, 활동 경험, 개발 실력, 자라온 배경 등 가급적 다양하게 구성되기를 바랍니다. 다만, 다수는 2~3학년의 전산학과 기본과목을 이수한 학생들로 구성되기를 희망합니다.</p>
      <p style={{fontSize: 17, lineHeight: 2}}>입력된 자료를 기준으로 서류심사가 진행되오니, 다소 항목이 많은 편이지만, 지원자분들을 잘 파악할 수 있도록 성실한 작성을 부탁드립니다!</p>
      <p style={{fontSize: 17, lineHeight: 2}}>몰입캠프 참가자로 선정된 후 취소 시에는, 추후 재지원 시 선발 순위가 많이 낮아집니다.</p>
      </div>
      </div>
      <button style={{marginTop: 30, backgroundColor: 'transparent', borderRadius: 3, width: 200, fontSize: 25,
                      height: 50}}>지원하기</button>
    </div>
  );
};

export default Application;
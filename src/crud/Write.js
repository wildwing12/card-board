import React from 'react'
import Layout from './../Layout';
import Button from 'react-bootstrap/Button';

const Write = () => {
  return (
    <Layout>
      <div style={{marginTop:"30px", textAlign: "center"}}>
        글제목
        <input />
        <br></br>
        대표이미지 주소
        <input />
        <br></br>
        {/* 퀼에디터 들어갈부분 */}
        <textarea></textarea>
        <br></br>
        <Button variant="primary" size="lg" disabled>
          저장
        </Button> &nbsp;&nbsp;
        <Button variant="secondary" size="lg" disabled>
          취소
        </Button>
      </div>
    </Layout>
  )
}

export default Write
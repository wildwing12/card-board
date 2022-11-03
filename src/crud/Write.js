import React, { useState, Component } from "react";
import Layout from "./../Layout";
import Button from "react-bootstrap/Button";
import ReactQuill from "react-quill";
import { modules, formats } from "../common/editorConstant";
import CustomToolbar from "../common/quillToolBar";

const Write = () => {
  const [text, setText] = useState("");

  const handleText = (value) => {
    console.log(value);
    setText(value);
  };

  return (
    <Layout>
      {/* 이부분은 커스텀 전입니다. */}
      {/* <div style={{height: "650px"}}>
          <ReactQuill 
              style={{height: "600px"}} 
              theme="snow" 
              modules={modules} 
              formats={formats} 
              // value={value || ''} 
              // onChange={(content, delta, source, editor) => onChange(editor.getHTML())} 
              />
      </div> */}

      <div style={{ padding: "50px" }}>
        <div style={{ margin: "0px 0px 40px 0px" }}>
          <h4 style={{ fontWeight: "bold" }}>타이틀입니다</h4>
          <p style={{ fontWeight: "500" }}>작성일자: 2022-10-27</p>
        </div>
        <div className="text-editor" style={{ marginBottom: "30px" }}>
          <CustomToolbar style={{ width: "100%", border: "1px solid blue" }} />
          <ReactQuill
            style={{ width: "100%", height: "600px" }}
            modules={modules}
            formats={formats}
            value={text}
            // onChange={handleText}
          />
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button variant="outline-primary">입력</Button> &nbsp;&nbsp;
          <Button variant="outline-secondary">취소</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Write;

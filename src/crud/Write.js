import React, { useState } from 'react'
import Layout from './../Layout'
import Button from 'react-bootstrap/Button'
import ReactQuill from 'react-quill'
import { modules, formats } from '../common/editorConstant'
import CustomToolbar from '../common/quillToolBar'
import { useNavigate } from 'react-router-dom'
import { addCard } from '../api'
import Swal from 'sweetalert2'

const Write = () => {

  const navigate = useNavigate();
  // quills edit
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [inputValue, setInputValue] = useState("")
  // quills edit
  const handleText = (value) => {
    console.log(value);
    setText(value);
  };

  const titleChange = (e) => {
    console.log(title)
    setTitle(e.target.value)
  }


  const addList = () => {
    const array = {
        title: title,
        contents: text,
        author: "양송현",
        thumbnail: "",
    }
    addCard(array)
    navigate(-1)
  }
  
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
<<<<<<< HEAD

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
=======
      
      <div style={{ padding:"3% 23%" }}>
        <div style={{margin:"0px 0px 40px 0px"}}>
          <h5 style={{fontWeight: "bold"}}>
            <input onChange={
              // (e)=> setTitle(e.target.value)
              titleChange
              } value={title} />
          </h5>
          <p style={{fontWeight: "500"}}>작성일자: 2022-10-27</p>
        </div>
        <div className="text-editor" style={{ marginBottom: "30px"}}>
          <CustomToolbar style={{width: "100%", border:"1px solid blue"}} />
          <ReactQuill style={{width: "100%", height: "500px"}} 
           modules={modules} 
           formats={formats} 
           value={text} 
           onChange={(e) => 
            setText(e)
          // console.log("e",e)
        }
          />
        </div>
        <div style={{ width: "100%", display:"flex", justifyContent: "center" }}>
          <Button variant="outline-primary" onClick={() => addList()}>입력</Button> &nbsp;&nbsp;
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>취소</Button>
>>>>>>> 0b736e07ad5d0e6cb0842bebf6e0d6b78b0058b6
        </div>
      </div>
    </Layout>
  );
};

export default Write;

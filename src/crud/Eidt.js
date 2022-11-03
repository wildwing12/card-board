import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { edit, editData } from "../api";
import { formats, modules } from "../common/editorConstant";
import CustomToolbar from "../common/quillToolBar";
import { sweet } from "../common/util";
import Layout from "../Layout";

const Eidt = () => {
  const location = useLocation();
  console.log(location);
  const [contents, setContents] = useState({
    title: "",
    text: "",
    author: "",
    thumbnail: "",
  });

  const onContentsChange = (e) => {
    setContents((prev) => ({ ...prev, title: e.target.value }));
  };

  useEffect(() => {
    editData({ id: 1 })
      .then((res) => {
        console.log(res);
        setContents({
          // id: r
          title: res.data.data.title,
          text: res.data.data.contents,
          author: res.data.data.author,
          thumbnail: res.data.data.thumbnail,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const textChange = (text) => {
    setContents((prev) => ({ ...prev, text: text }));
  };

  const navigate = useNavigate();
  const callBack = () => {
    navigate("/");
  };

  const editContents = () => {
    const param = {
      id: location.state.id,
      title: contents.title, //게시글 제목
      contents: contents.text, //게시글 내용
      thumbnail: contents.thumbnail,
      author: "수정자", //게시글 작성자
    };
    console.log(param);
    edit(param).then((res) => {
      console.log(res);
      sweet(
        "수정되었습니다",
        "목록화면으로 돌아갑니다",
        "success",
        "",
        callBack
      );
    });
  };

  const thumbNailChange = (e) => {
    setContents((prev) => ({ ...prev, thumbnail: e.target.value }));
  };

  return (
    <Layout>
      <div style={{ padding: "50px" }}>
        <div style={{ margin: "0px 0px 40px 0px" }}>
          <input
            style={{ fontWeight: "bold" }}
            value={contents.title}
            onChange={onContentsChange}
          />
          <p style={{ fontWeight: "500" }}>수정일자: 2022-10-28</p>
        </div>
        <div className="text-editor" style={{ marginBottom: "30px" }}>
          <CustomToolbar style={{ width: "100%", border: "1px solid blue" }} />
          <ReactQuill
            style={{ width: "100%", height: "600px" }}
            modules={modules}
            formats={formats}
            value={contents.text}
            onChange={textChange}
          />
        </div>
        <input onChange={thumbNailChange} value={contents.thumbnail} />
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Button variant="ouline-primary" onClick={editContents}>
            수정
          </Button>{" "}
          &nbsp;&nbsp;
          <Button variant="outline-secondary">취소</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Eidt;

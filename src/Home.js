import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  // Nav,
  // Navbar,
  // Stack,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { test, preview } from "./api";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2";
import Layout from "./Layout";
import { sweet } from "./common/util";
import { Link, useNavigate } from "react-router-dom";
import useTestHook from "./customHook/useTestHook";

const Home = () => {
  const [list, setList] = useState([]);
  // const preview = async () => {};
  // const { text, setText, makeText } = useTestHook();

  useEffect(() => {
    // console.log(text);
    // makeText("테스트입니다");
    // test().then((res) => {
    //   setList(res.data);
    // });
    preview().then((res) => {
      setList(res.data.data.content);
      console.log("preview", res);
    });
  }, []);
  // console.log(text);
  console.log(list?.data);

  const navigate = useNavigate();

  const moveEditPage = (id) => {
    navigate("/edit/1", { state: { id: 1 } });
    console.log(id);
  };

  return (
    <Layout>
      <Container className="align-content-center" style={{ marginTop: "10px" }}>
        <Row>
          {list.map((i) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://blog.kakaocdn.net/dn/2ChCI/btqvPbkYHXS/Bjoh4TSXHv66xRoiu6mrr1/img.gif"
                  />
                  <Card.Body>
                    <Card.Title>{i?.title}</Card.Title>
                    <Card.Text>
                      <pre dangerouslySetInnerHTML={{ __html: i?.contents }} />
                    </Card.Text>
                    <Button onClick={() => moveEditPage(i.id)}>수정하기</Button>
                    <Button
                      variant="primary"
                      onClick={() => sweet("삭제", "삭제2", "question")}
                    >
                      삭제
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;

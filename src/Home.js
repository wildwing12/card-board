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
import { test } from "./api";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2";
import Layout from "./Layout";
import { sweet } from "./common/util";

const Home = () => {
  const [list, setList] = useState({});
  useEffect(() => {
    test().then((res) => {
      setList(res.data);
    });
  }, []);
  console.log(list?.data?.title);

  return (
    <Layout>
      <Container className="align-content-center" style={{ marginTop: "10px" }}>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://blog.kakaocdn.net/dn/2ChCI/btqvPbkYHXS/Bjoh4TSXHv66xRoiu6mrr1/img.gif"
              />
              <Card.Body>
                <Card.Title>{list?.data?.title}</Card.Title>
                <Card.Text>{list?.data?.contents}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => sweet("삭제", "삭제2", "question")}
                >
                  페이지 이동
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://blog.kakaocdn.net/dn/2ChCI/btqvPbkYHXS/Bjoh4TSXHv66xRoiu6mrr1/img.gif"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://blog.kakaocdn.net/dn/2ChCI/btqvPbkYHXS/Bjoh4TSXHv66xRoiu6mrr1/img.gif"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;

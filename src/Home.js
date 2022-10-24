import React from 'react'
import {
    Button,
    Col,
    Container,
    Nav,
    Navbar,
    Row,
    Stack,
  } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
    <Container
      className="align-content-center"
      style={{ marginTop: "10px" }}
    >
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://blog.kakaocdn.net/dn/2ChCI/btqvPbkYHXS/Bjoh4TSXHv66xRoiu6mrr1/img.gif"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
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
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
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
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
  )
}

export default Home
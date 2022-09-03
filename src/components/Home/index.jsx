import React from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Row justify="center">
        <h2>Minify</h2>
      </Row>
      <Row gutter={16}>
        <Col span={4} offset={5}>
          <Link to={"/minify-js"}>
            <Card className="card">
              <p>Javascript</p>
            </Card>
          </Link>
        </Col>
        <Col span={4} offset={1}>
          <Link to={"/minify-css"}>
            <Card className="card">
              <p>CSS</p>
            </Card>
          </Link>
        </Col>
        <Col span={4} offset={1}>
          <Link to={"/minify-html"}>
            <Card className="card">
              <p>HTML</p>
            </Card>
          </Link>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row justify="center">
        <h2>Beautify</h2>
      </Row>
      <Row gutter={16}>
        <Col span={4} offset={5}>
          <Link to={"/beautify-js"}>
            <Card className="card">
              <p>Javascript</p>
            </Card>
          </Link>
        </Col>
        <Col span={4} offset={1}>
          <Link to={"/beautify-css"}>
            <Card className="card">
              <p>CSS</p>
            </Card>
          </Link>
        </Col>
        <Col span={4} offset={1}>
          <Link to={"/beautify-html"}>
            <Card className="card">
              <p>HTML</p>
            </Card>
          </Link>
        </Col>
      </Row>
      <br></br>
      <Row gutter={16}>
        <Col span={4} offset={5}>
          <Link to={"/beautify-json"}>
            <Card className="card">
              <p>JSON</p>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

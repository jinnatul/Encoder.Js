import React, { useState } from "react";
import { Col, Row, Menu, Button } from "antd";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./Home.css";
import {
  FolderAddOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
  CopyOutlined,
  FullscreenOutlined,
  LinkOutlined,
  FullscreenExitOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const Home = () => {
  const [code, setCode] = useState(``);

  console.log(code);

  return (
    <div>
      <Row>
        <Col xs={{ span: 6, offset: 2 }} lg={{ span: 9, offset: 1 }}>
          <Menu mode="horizontal" theme="dark">
            <Item key="file" icon={<FolderAddOutlined />}>
              Open File
            </Item>
            <Item key="url" icon={<LinkOutlined />}>
              Enter Url
            </Item>
            <Item key="Copy" icon={<CopyOutlined />}>
              Copy
            </Item>
            <Item key="fullscreen" icon={<FullscreenOutlined />}>
              Full Screen
            </Item>
            <Item key="clear" icon={<DeleteOutlined />}>
              Clear
            </Item>
          </Menu>
          <div className="App-editor">
            <CodeEditor
              value={code}
              language="js"
              placeholder="Write code here or paste code here"
              minHeight={500}
              onChange={(evn) => setCode(evn.target.value)}
              style={{
                fontSize: 14,
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
        </Col>
        <Col xs={{ span: 2, offset: 1 }} lg={{ span: 2, offset: 1 }}>
          <Row justify="center">
            <Col>
              <Button
                type="primary"
                shape="round"
                icon={<FullscreenExitOutlined />}
                size={"large"}
                style={{ background: "#001529", borderColor: "green" }}
              >
                Minify
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row justify="center">
            <Col>
              <Button
                type="primary"
                shape="round"
                icon={<FormatPainterOutlined />}
                size={"large"}
                style={{ background: "#001529", borderColor: "green" }}
              >
                Beautify
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 5, offset: 2 }} lg={{ span: 9, offset: 1 }}>
          <Menu mode="horizontal" theme="dark">
            <Item key="save" icon={<VerticalAlignBottomOutlined />}>
              Save
            </Item>
            <Item key="Copy" icon={<CopyOutlined />}>
              Copy
            </Item>
            <Item key="fullscreen" icon={<FullscreenOutlined />}>
              Full Screen
            </Item>
            <Item key="clear" icon={<DeleteOutlined />}>
              Clear
            </Item>
          </Menu>
          <div className="App-editor">
            <CodeEditor
              value={code}
              language="js"
              placeholder="Output code here"
              minHeight={500}
              onChange={(evn) => setCode(evn.target.value)}
              style={{
                fontSize: 14,
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

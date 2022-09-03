import React, { useState } from "react";
import { Col, Row, Menu, Button, Modal } from "antd";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { minify } from "terser";
import Notification from "../../utils/Notification";
import "./MinifyJs.css";
import {
  FolderAddOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
  CopyOutlined,
  FullscreenOutlined,
  LinkOutlined,
  FullscreenExitOutlined,
  FormatPainterOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const MinifyJs = ({ type }) => {
  const [code, setCode] = useState(``);
  const [minifyCode, setMinifyCode] = useState(``);

  const minifyCodeHandler = async () => {
    try {
      if (!code.length) {
        return Notification("Please write code or paste code!", "info");
      }
      const result = await minify(code, {
        compress: true,
      });
      if (result.code) {
        setMinifyCode(result.code);
      }
      Notification("Minify successfully", "success");
    } catch (error) {
      Notification("Provide valid javascript code!", "error");
    }
  };

  const clearInput = () => {
    if (code.length) {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "Do you want to clear your editor?",
        okText: "Yes",
        cancelText: "No",
        onOk: () => {
          setCode(``);
          Notification("Editor cleaned", "success");
        },
      });
    }
  };

  const clearOutput = () => {
    if (minifyCode.length) {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: "Do you want to clear your editor?",
        okText: "Yes",
        cancelText: "No",
        onOk: () => {
          setMinifyCode(``);
          Notification("Editor cleaned", "success");
        },
      });
    }
  };

  const InputItems = [
    {
      label: "Open File",
      icon: <FolderAddOutlined />,
      key: "openfile",
    },
    {
      label: "Enter Url",
      icon: <LinkOutlined />,
      key: "enterurl",
    },
    {
      label: "Copy",
      icon: <CopyOutlined />,
      key: "copy",
    },
    {
      label: "Full Screen",
      icon: <FullscreenOutlined />,
      key: "fullscreen",
    },
    {
      label: "Clear",
      icon: <DeleteOutlined />,
      key: "clear",
      onClick: clearInput,
    },
  ];

  const OutputItems = [
    {
      label: "Save",
      icon: <VerticalAlignBottomOutlined />,
      key: "save",
    },
    {
      label: "Copy",
      icon: <CopyOutlined />,
      key: "copy",
    },
    {
      label: "Full Screen",
      icon: <FullscreenOutlined />,
      key: "fullscreen",
    },
    {
      label: "Clear",
      icon: <DeleteOutlined />,
      key: "clear",
      onClick: clearOutput,
    },
  ];

  return (
    <div>
      <Row>
        <Col xs={{ span: 6, offset: 2 }} lg={{ span: 9, offset: 1 }}>
          <Menu mode="horizontal" theme="dark" items={InputItems} />
          <div className="App-editor">
            <CodeEditor
              value={code}
              language="js"
              placeholder="Write code here or paste code here"
              minHeight={550}
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
          {type === "minify" ? (
            <Row justify="center">
              <Col>
                <Button
                  type="primary"
                  shape="round"
                  icon={<FullscreenExitOutlined />}
                  size={"large"}
                  style={{ background: "#001529", borderColor: "green" }}
                  onClick={minifyCodeHandler}
                >
                  Minify JS
                </Button>
              </Col>
            </Row>
          ) : (
            <Row justify="center">
              <Col>
                <Button
                  type="primary"
                  shape="round"
                  icon={<FormatPainterOutlined />}
                  size={"large"}
                  style={{ background: "#001529", borderColor: "green" }}
                >
                  Beautify JS
                </Button>
              </Col>
            </Row>
          )}
        </Col>
        <Col xs={{ span: 5, offset: 2 }} lg={{ span: 9, offset: 1 }}>
          <Menu mode="horizontal" theme="dark" items={OutputItems} />
          <div className="App-editor">
            <CodeEditor
              value={minifyCode}
              language="js"
              placeholder="Output code here"
              minHeight={550}
              onChange={(evn) => setMinifyCode(evn.target.value)}
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

export default MinifyJs;

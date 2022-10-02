import React, { useState, createRef } from "react";
import {
  Col,
  Row,
  Menu,
  Button,
  Modal,
  Drawer,
  Input,
  Form,
  Tooltip,
} from "antd";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { minify } from "csso";
import axios from "axios";
import Notification from "../../utils/Notification";
import "./MinifyCss.css";
import {
  FolderAddOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
  CopyOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  FormatPainterOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const MinifyCss = ({ type }) => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fullScreenType, setFullScreenType] = useState(true);
  const [code, setCode] = useState(``);
  const [minifyCode, setMinifyCode] = useState(``);

  const fileUpload = createRef();
  const [form] = Form.useForm();

  const minifyCodeHandler = async () => {
    try {
      if (!code.length) {
        return Notification("Please write code or paste code!", "info");
      }
      const result = minify(code);
      if (result.css) {
        setMinifyCode(result.css);
      }
      Notification("Minify successfully", "success");
    } catch (error) {
      Notification("Provide valid javascript code!", "error");
    }
  };

  const fileRead = (event) => {
    const reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setCode(e.target.result);
    });
    reader.readAsText(event.target.files[0]);
  };

  const clickFileInput = () => {
    fileUpload.current.click();
  };

  const enterUrl = async ({ url }) => {
    try {
      if (url.slice(-3) !== ".js") {
        return Notification("Provide valid url!", "error");
      }
      const { data } = await axios.get(url);
      setCode(data);
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      Notification("Provide valid url!", "error");
    }
  };

  const downloadFile = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(minifyCode)
    );
    element.setAttribute("download", "Minify.js");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);

    Notification("File download successfully", "success");
  };

  const clipBoard = (type) => {
    navigator.clipboard.writeText(type ? code : minifyCode);
    if (code.length || minifyCode.length) {
      Notification("Code copy successfully", "success");
    }
  };

  const openFullScreen = (type) => {
    setFullScreenType(type);
    setVisible(true);
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
      label: (
        <input
          id="inputFile"
          type="file"
          name="file"
          accept=".css, .scss"
          onChange={fileRead}
          onClick={(event) => {
            event.target.value = null;
          }}
          ref={fileUpload}
        />
      ),
      icon: (
        <Tooltip placement="leftTop" title="Click to Upload">
          <div className="my-icon-wrapper test">
            <FolderAddOutlined />
          </div>
        </Tooltip>
      ),
      key: "openfile",
      onClick: clickFileInput,
    },
    {
      label: "Copy",
      icon: <CopyOutlined />,
      key: "copy",
      onClick: () => clipBoard(true),
    },
    {
      label: "Full Screen",
      icon: <FullscreenOutlined />,
      key: "fullscreen",
      onClick: () => openFullScreen(true),
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
      onClick: downloadFile,
    },
    {
      label: "Copy",
      icon: <CopyOutlined />,
      key: "copy",
      onClick: () => clipBoard(false),
    },
    {
      label: "Full Screen",
      icon: <FullscreenOutlined />,
      key: "fullscreen",
      onClick: () => openFullScreen(false),
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
                  Minify CSS
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
                  Beautify CSS
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
      <Drawer
        placement={"left"}
        visible={visible}
        closable={false}
        width="100VW"
      >
        <Row justify="end">
          <Col>
            <Button
              className="closeBtn"
              shape="round"
              icon={<CloseCircleOutlined />}
              size={"large"}
              onClick={() => setVisible(false)}
            >
              Close
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <CodeEditor
              value={fullScreenType ? code : minifyCode}
              language="js"
              placeholder={
                fullScreenType
                  ? "Write code here or paste code here"
                  : "Output code here"
              }
              minHeight={900}
              onChange={(evn) =>
                fullScreenType
                  ? setCode(evn.target.value)
                  : setMinifyCode(evn.target.value)
              }
              style={{
                fontSize: 14,
                backgroundColor: "#f5f5f5",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </Col>
        </Row>
      </Drawer>
      <Modal
        visible={isModalVisible}
        footer={false}
        onCancel={() => setIsModalVisible(false)}
      >
        <br></br>
        <br></br>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          form={form}
          onFinish={enterUrl}
          autoComplete="off"
        >
          <Form.Item
            label="URL"
            name="url"
            rules={[
              {
                required: true,
                message: "Please input your url!",
              },
              { min: 3, message: "Please input valid url!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MinifyCss;

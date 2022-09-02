import React from "react";
import { Col, Row, Input, Menu } from "antd";
import {
  FolderAddOutlined,
  VerticalAlignBottomOutlined,
  DeleteOutlined,
  CopyOutlined,
  FullscreenOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const { Item } = Menu;

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs={{ span: 6, offset: 2 }} lg={{ span: 9, offset: 2 }}>
          <Menu mode="horizontal">
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
          <TextArea rows={20} />
        </Col>
        <Col xs={{ span: 5, offset: 2 }} lg={{ span: 9, offset: 2 }}>
          <Menu mode="horizontal">
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
          <TextArea rows={20} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

import { Layout, Menu } from "antd";
import React from "react";
import moment from "moment";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  FullscreenExitOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";

import AppRoutes from "../routes/AppRoutes";

const { Header, Content, Footer } = Layout;
const { Item, SubMenu } = Menu;

const Layouts = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          style={{ justifyContent: "center" }}
          mode="horizontal"
          theme="dark"
        >
          <Link to={"/"}>
            <Item key="home" icon={<HomeOutlined />} t>
              Home
            </Item>
          </Link>
          <SubMenu
            key="minify"
            title="Minify"
            icon={<FullscreenExitOutlined />}
          >
            <Item key="m_javascript">
              <Link to={"/minify-js"}>Javascript</Link>
            </Item>
            <Item key="m_css">
              <Link to={"/minify-css"}>CSS</Link>
            </Item>
            <Item key="m_html">
              <Link to={"/minify-html"}>HTML</Link>
            </Item>
          </SubMenu>
          <SubMenu
            key="beautify"
            title="Beautify"
            icon={<FormatPainterOutlined />}
          >
            <Item key="b_javascript">
              <Link to={"/beautify-js"}>Javascript</Link>
            </Item>
            <Item key="b_css">
              <Link to={"/beautify-css"}>CSS</Link>
            </Item>
            <Item key="b_html">
              <Link to={"/beautify-html"}>HTML</Link>
            </Item>
            <Item key="b_json">
              <Link to={"/beautify-json"}>JSON</Link>
            </Item>
          </SubMenu>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <AppRoutes />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Minify ©{moment().format("YYYY")} Created by Morol
      </Footer>
      <ToastContainer />
    </Layout>
  );
};

export default Layouts;

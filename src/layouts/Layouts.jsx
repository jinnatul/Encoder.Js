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

const Layouts = () => {
  const Items = [
    {
      label: <Link to={"/"}>Home</Link>,
      icon: <HomeOutlined />,
      key: "home",
    },
    {
      label: "Minify",
      icon: <FullscreenExitOutlined />,
      key: "minify",
      children: [
        {
          label: <Link to={"/minify-js"}>Javascript</Link>,
          key: "m_javascript",
        },
        {
          label: <Link to={"/minify-css"}>CSS</Link>,
          key: "m_css",
        },
        {
          label: <Link to={"/minify-html"}>HTML</Link>,
          key: "m_html",
        },
      ],
    },
    {
      label: "Beautify",
      icon: <FormatPainterOutlined />,
      key: "beautify",
      children: [
        {
          label: <Link to={"/beautify-js"}>Javascript</Link>,
          key: "b_javascript",
        },
        {
          label: <Link to={"/beautify-css"}>CSS</Link>,
          key: "b_css",
        },
        {
          label: <Link to={"/beautify-html"}>HTML</Link>,
          key: "b_html",
        },
        {
          label: <Link to={"/beautify-json"}>JSON</Link>,
          key: "b_json",
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          style={{ justifyContent: "center" }}
          mode="horizontal"
          theme="dark"
          items={Items}
        />
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

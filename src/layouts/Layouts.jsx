import { Layout } from "antd";
import React from "react";
import moment from 'moment';
import { ToastContainer } from 'react-toastify';

import AppRoutes from "../routes/AppRoutes";

const { Header, Content, Footer } = Layout;

const Layouts = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        
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
        Minify ©{moment().format('YYYY')} Created by Morol
      </Footer>
      <ToastContainer />
    </Layout>
  );
};

export default Layouts;

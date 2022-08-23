import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { HomeMain } from "../pages/Home/Home";
import DnaOutput from "../pages/DnaOutput/DnaOut";
import DnaBarChart from "../pages/DnaBarChart/BarChart";
import Practice from "../pages/Practice/practice";
import Kmers from "../pages/Kmers/kmers";
import "./HomeLayout.css";
import { Link, Routes, Route } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const HomeLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/output">DNA output</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/bar-chart">DNA Bar Chart</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/practice">Practice</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/kmers">Kmers</Link>
        </Menu.Item>
      </Menu>
      {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        /> */}
    </Header>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/output" element={<DnaOutput />} />
          <Route path="/bar-chart" element={<DnaBarChart />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/kmers" element={<Kmers />} />
        </Routes>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default HomeLayout;

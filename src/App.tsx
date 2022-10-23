import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import styles from "./styles/App.module.scss";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className={`layout ${styles.container}`}>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer className={styles.footer}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default App;

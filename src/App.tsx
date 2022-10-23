import { Avatar, Breadcrumb, Layout, Menu, Space, Typography } from "antd";
import React from "react";
import styles from "./styles/App.module.scss";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className={`layout ${styles.container}`}>
    <Header className={styles.titleHeader}>
      <Space>
        <Avatar
          shape="square"
          src="https://www.nicepng.com/png/full/170-1705126_hello-kitty-logo-png-for-kids-hello-kitty.png"
        />
        <Typography.Title className={styles.fullName} level={2}>
          Sumaiya Sultana
        </Typography.Title>
      </Space>
    </Header>
    <Header className={styles.navHeader}>
      <Menu
        className={styles.menu}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["hime"]}
        items={[
          { key: "home", label: "About me" },
          { key: "projects", label: "Projects" },
          { key: "resume", label: "Resume" },
        ]}
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

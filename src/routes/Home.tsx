import React, { Fragment } from "react";
import { Space, Typography } from "antd";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <Space className={styles.container} direction="vertical">
      <Typography.Title className={styles.greetings}>
        Hi, I'm <span> Sumaiya</span>.
      </Typography.Title>
      <Typography.Title className={styles.summery} level={3}>
        Web Developer | Student | Traveller
      </Typography.Title>
    </Space>
  );
};

export default Home;

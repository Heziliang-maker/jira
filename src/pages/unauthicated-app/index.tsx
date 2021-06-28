import React, { useState } from "react";
import { LoginScreen } from "../screens/login/";
import { RegisterScreen } from "../screens/register/";
import { Card, Divider, Typography } from "antd";
import styles from "./index.module.css";

export const UnAuthicatedApp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography.Title level={3}>
          {isLogin ? "注册" : "登录"}
        </Typography.Title>
        {isLogin ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <div>
          <a onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "已经有账号了?直接登录" : "没有账号?立即注册"}
          </a>
        </div>
      </Card>
    </div>
  );
};

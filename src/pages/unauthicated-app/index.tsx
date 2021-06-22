import React, { useState } from "react";
import { LoginScreen } from "../screens/login/";
import { RegisterScreen } from "../screens/register/";
import { Card, Divider } from "antd";
import styled from "@emotion/styled";

export const UnAuthicatedApp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <ShadowCard>
        {isLogin ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <a onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "已经有账号了?直接登录" : "没有账号?立即注册"}
        </a>
      </ShadowCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 36rem;
  padding: 3.2rem 4rem;
  border-radius: 0%.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  margin: 20rem auto;
`;

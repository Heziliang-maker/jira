import React, { useState } from "react";
import { LoginScreen } from "../screens/login/";
import { RegisterScreen } from "../screens/register/";

export const UnAuthicatedApp: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsLogin(!isLogin)}>
        切换到{isLogin ? "登录" : "注册"}
      </button>
    </>
  );
};

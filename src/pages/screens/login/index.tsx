import React, { FormEvent } from "react";
import { useAuth } from "../../../context/AuthContext";

export const LoginScreen: React.FC = () => {
  const { login, user } = useAuth();
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;

    // const res = await login();
    login({ username, password });
  };
  return (
    <>
      {user && <p>用户名为:{user.name}</p>}
      <form
        onSubmit={(evt) => {
          handleSubmit(evt);
        }}
      >
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">登录 </button>
      </form>
    </>
  );
};

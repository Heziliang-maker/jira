import React, { useState, useEffect, FormEvent } from "react";
const BASEURL = process.env.REACT_APP_API_URL;

export const LoginScreen: React.FC = () => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    const url = `${BASEURL}/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        console.log("登录=>", res);
      }
    });
  };
  return (
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
  );
};

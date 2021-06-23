import React, { FormEvent } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export const LoginScreen: React.FC = () => {
  const { login, user } = useAuth();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    login(values);
  };
  return (
    <>
      {user && <p>用户名为:{user.name}</p>}
      <Form
        onFinish={(evt) => {
          handleSubmit(evt);
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
          className={"px-5"}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
          className={"px-5"}
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item className={"px-5"}>
          <Button block className={"mx-auto"} htmlType="submit" type="primary">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

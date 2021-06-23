import React, { FormEvent } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Form, Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
export const RegisterScreen: React.FC = () => {
  const { register } = useAuth();

  const handleSubmit = async (value: {
    username: string;
    password: string;
  }) => {
    register(value);
  };
  return (
    <Form onFinish={(value) => handleSubmit(value)}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          placeholder="密码"
          type="password"
        />
      </Form.Item>
      <Button block className={"mx-auto"} htmlType="submit" type="primary">
        注册
      </Button>
    </Form>
  );
};

import React, { SetStateAction } from "react";
import { IParam } from "./index";
import { Input, Select, Form } from "antd";

export interface IUser {
  id: string;
  name: string;
}
interface IPropsType {
  param: IParam;
  setParam: (param: IParam) => void;
  users: IUser[];
}
export const SearchPannel: React.FC<IPropsType> = ({
  param,
  setParam,
  users,
}) => {
  return (
    <Form layout="inline" style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          placeholder="项目名称"
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value="">负责人</Select.Option>
          {users.map((user) => (
            <Select.Option key={user.id} value={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

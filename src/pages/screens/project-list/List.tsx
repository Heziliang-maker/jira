import React from "react";
import { IUser } from "./SearchPannel";
import { Table } from "antd";

interface IPropsType {
  list: any[];
  users: IUser[];
}

export const List: React.FC<IPropsType> = ({ list, users }) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user: IUser) => user.id === project.personId)
                  ?.name || "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};

import React from "react";
import { IUser } from "./SearchPannel";

interface IPropsType {
  list: any[];
  users: IUser[];
}

export const List: React.FC<IPropsType> = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

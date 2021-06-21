import React, { SetStateAction } from "react";
import { IParam } from "./index";

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
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

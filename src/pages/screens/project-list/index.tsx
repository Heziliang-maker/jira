import { List } from "./List";
import { SearchPannel } from "./SearchPannel";
import React, { useState, useEffect } from "react";
import qs from "qs";
import { cleanObj, useMount, useDebounce, useArray } from "../../../utils";
const BASEURL = process.env.REACT_APP_API_URL;

export interface IParam {
  name: string;
  personId: string;
}

export default () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const deboucedParam = useDebounce(param, 1000);
  // 参数变化 获取数据
  useEffect(() => {
    // name=${param.name}&personId=${param.personId}
    const url = `${BASEURL}/projects?${qs.stringify(cleanObj(deboucedParam))}`;
    fetch(url).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [useDebounce(deboucedParam)]);
  // 初始化
  useMount(() => {
    const url = `${BASEURL}/users`;
    fetch(url).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <List list={list} users={users} />
      <SearchPannel param={param} setParam={setParam} users={users} />
    </div>
  );
};

export const Test: React.FC = () => {
  let persons2 = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
  ];

  const { add, value, removeIndex, clear } = useArray(persons2);
  return (
    <div>
      <ul>
        <li onClick={() => add({ id: value.length + 1, name: "liu" })}>add</li>
        <li onClick={() => removeIndex(0)}>removeIndex</li>
        <li onClick={() => clear()}>clear</li>
      </ul>
      <ul>
        {value.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

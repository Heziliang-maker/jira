import { List } from "./List";
import { SearchPannel } from "./SearchPannel";
import React, { useState, useEffect } from "react";
import { cleanObj, useMount, useDebounce, useArray } from "../../../utils";
import { useHttp } from "../../../http";

export interface IParam {
  name: string;
  personId: string;
}

export const ProjectList: React.FC = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const client = useHttp();

  const deboucedParam = useDebounce(param, 1000);
  // 参数变化 获取数据
  useEffect(() => {
    // name=${param.name}&personId=${param.personId}
    client(`projects`, { data: cleanObj(deboucedParam) }).then(setList);
  }, [useDebounce(deboucedParam)]);
  // 初始化
  useMount(() => {
    client("users").then(setUsers);
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

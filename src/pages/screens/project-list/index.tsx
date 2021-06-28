import { List } from "./List";
import { SearchPannel } from "./SearchPannel";
import React, { useState, useEffect } from "react";
import { cleanObj, useMount, useDebounce, useArray } from "../../../utils";
import { useHttp } from "../../../http";
import { useAsync } from "../../../utils/use-async";
import styles from "./index.module.css";
import { Typography } from "antd";
export interface IParam {
  name: string;
  personId: string;
}

export const ProjectList: React.FC = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState([]);

  const client = useHttp();

  const { isLoading, run, error, data: list } = useAsync<any>();

  const deboucedParam = useDebounce(param, 1000);
  // 参数变化 获取数据
  useEffect(() => {
    // name=${param.name}&personId=${param.personId}
    // client(`projects`, { data: cleanObj(deboucedParam) }).then(setList);
    run(client(`projects`, { data: cleanObj(deboucedParam) }));
  }, [useDebounce(deboucedParam)]);
  // 初始化
  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div className={styles["contentContainer"]}>
      <h1>项目列表</h1>
      <SearchPannel param={param} setParam={setParam} users={users} />
      {error ? (
        <Typography.Text type={"danger"}>{error}</Typography.Text>
      ) : null}
      <List dataSource={list} users={users} loading={isLoading} />
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

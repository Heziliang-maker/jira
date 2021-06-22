import { GET_TOKEN } from "../utils/auth";
import { useAuth } from "../context/AuthContext";
import qs from "qs";
import { logout } from "../auth/auth-provider";
const BASEURL = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  data?: any;
  token?: string;
}

// 抽象http的请求
// 给一个默认值 因为解构之后还设为可选参数是不被允许的
export const http = (
  url: string,
  { data, token, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    url += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${BASEURL}/${url}`, {
      ...config,
    })
    .then(async (response) => {
      if (response.status === 401) {
        //未登录(无权限)
        await logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      } else {
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // Parameters<typeof http> 把函数的参数类型以数组的形式返回
  return (...[url, config]: Parameters<typeof http>) => {
    return http(url, { ...config, token: user?.token });
  };
};

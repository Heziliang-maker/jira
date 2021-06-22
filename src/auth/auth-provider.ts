import { SET_TOKEN, CLEAR_TOKEN } from "../utils/auth";
export interface IUser {
  token: string;
  name: string;
}
const BASEURL = process.env.REACT_APP_API_URL;
export const handleUserResponse = ({ user }: { user: IUser }) => {
  SET_TOKEN(user.token || "");
  return user;
};

export const register = async (data: {
  username: string;
  password: string;
}) => {
  const url = `${BASEURL}/register`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const login = (data: { username: string; password: string }) => {
  const url = `${BASEURL}/login`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    console.log("=>", "hjhhh");
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const logout = async () => {
  CLEAR_TOKEN();
};

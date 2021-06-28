import { createContext, useState, useContext, ReactNode } from "react";
import { IUser } from "../auth/auth-provider";
import * as auth from "../auth/auth-provider";
import { GET_TOKEN } from "../utils/auth";
import { http } from "../http";
import { useMount } from "../utils";

interface IAuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = GET_TOKEN();
  if (token) {
    user = await http("me", { token });
  }
  return user;
};


const authContext =
  createContext<
    | {
        user: IUser | null;
        register: (form: IAuthForm) => void;
        login: (form: IAuthForm) => Promise<void>;
        logout: () => Promise<void>;
      }
    | undefined
  >(undefined);
authContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | IUser>(null);
  // const login = (form: AuthForm) =>
  //   auth.login(form).then((user) => setUser(user));
  // ===> POINT FREE
  const login = (form: IAuthForm) => auth.login(form).then(setUser);
  const register = (form: IAuthForm) => auth.register(form);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    bootstrapUser().then(setUser);
  });

  return (
    <authContext.Provider value={{ user, login, register, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvder中使用");
  }
  return context;
};

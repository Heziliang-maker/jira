import { createContext, useState, useContext, ReactNode } from "react";
import { IUser } from "../auth/auth-provider";
import * as auth from "../auth/auth-provider";

interface IAuthForm {
  username: string;
  password: string;
}

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

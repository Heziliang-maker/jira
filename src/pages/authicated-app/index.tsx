import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ProjectList } from "../screens/project-list";

export const AuthicatedApp: React.FC = () => {
  const { logout } = useAuth();
  return (
    <>
      <ProjectList />
      <button onClick={() => logout()}>登出</button>
    </>
  );
};

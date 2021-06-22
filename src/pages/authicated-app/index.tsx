import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ProjectList } from "../screens/project-list";
import { Button } from "antd";

export const AuthicatedApp: React.FC = () => {
  const { logout } = useAuth();
  return (
    <>
      <ProjectList />
      <Button onClick={() => logout()}>登出</Button>
    </>
  );
};

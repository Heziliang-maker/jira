import React from "react";
import { useAuth } from "../../context/AuthContext";
import { ProjectList } from "../screens/project-list";
import { Button, Dropdown, Menu } from "antd";
import styles from "./index.module.css";
// svg 以 Component 的方式匯入至 Template，可以保留 SVG 的特性，直接使用 stroke 來改變圖形外觀
// import { ReactComponent as SoftwareLogo } from "../../assets/logo.png";
import softwareLogo from "../../assets/logo.png";

export const AuthicatedApp: React.FC = () => {
  const { logout, user } = useAuth();
  return (
    <div className={styles.container}>
      <div className={styles["page-header"]}>
        <div className={styles["page-header-left"]}>
          <img className={styles["logo"]} src={softwareLogo} alt="" />
          {/* <SoftwareLogo /> */}
          <h3>项目</h3>
          <h3>用户</h3>
        </div>
        <div className={styles["page-header-right"]}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="layout">
                  <Button type="link" onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type="link">Hi,{user?.name}</Button>
          </Dropdown>
        </div>
      </div>
      <div className={styles["page-nav"]}></div>
      <div className={styles["page-main"]}>
        <ProjectList />
      </div>
      <div className={styles["page-aside"]}></div>
      <div className={styles["page-footer"]}></div>
    </div>
  );
};

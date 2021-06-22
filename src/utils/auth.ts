const TOKEN_KEY = "__jira_token";

export const SET_TOKEN = (value?: string): void => {
  window.localStorage.setItem(TOKEN_KEY, value || "");
};

export const GET_TOKEN = (): string => {
  return window.localStorage.getItem(TOKEN_KEY) || "";
};

export const CLEAR_TOKEN = (): void => {
  window.localStorage.clear();
};

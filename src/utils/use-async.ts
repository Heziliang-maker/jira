import { useState } from "react";

interface State<D> {
  error: Error | null;
  data: D | null;
  state: "idle" | "loading" | "error" | "success"; //未发生 正在发生 失败 成功
}

const defaultInitialState: State<null> = {
  state: "idle",
  error: null,
  data: null,
};

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  const setData = (data: D) => {
    setState({
      data,
      state: "success",
      error: null,
    });
  };

  const setError = (error: Error) => {
    setState({
      data: null,
      state: "error",
      error: error,
    });
  };

  const run = (promise: Promise<D>) => {
    if (!Promise || !promise.then) {
      throw new Error("请传入promise数据");
    }
    // loading ...
    setState({
      ...state,
      state: "loading",
    });
    return promise
      .then((data) => {
        // success ...
        setData(data);
        return data;
      })
      .catch((err) => {
        // error
        setError(err);
      });
  };

  return {
    // 状态
    isIdle: state.state === "idle",
    isLoading: state.state === "loading",
    isSuccess: state.state === "success",
    isError: state.state === "error",
    // 错误
    error: state.error,
    // 数据
    data: state.data,
    run,
    setData,
    setError,
  };
};

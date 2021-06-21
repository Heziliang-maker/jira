import { useEffect, useState } from "react";

import { IParam } from "../pages/screens/project-list/index";
export const isFalsy = (value: unknown) => (value === 0 ? true : !!value);

export const cleanObj = <T extends object, K extends keyof T>(obj: T): {} => {
  const result: T = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    let value = result[key];
    if (!isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (cb: () => void) => {
  useEffect(() => {
    cb();
  }, []);
};

// export const useDebounce = (cb, time = 500, ...params) => {
//   let timer;
//   return (...params) => {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       cb(...params);
//     }, time);
//   };
// };

export const useDebounce = (value: any, time: number = 500) => {
  const [debonceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [value, time]);

  return debonceValue;
};

import React, { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? true : !!value);

// 避免false字面量被排除
export const isVoid = (value: unknown) =>
  value === null || value === "" || value === undefined;

// 因为object的覆盖很多 限制键值对

// export const cleanObj = <T extends object, K extends keyof T>(obj: T): {} => {
//   // Reference http://semlinker.com/ts-keyof/
//   const result = { ...obj };
//   Object.keys(result).forEach((key) => {
//     let value = result[key as K];
//     if (!isFalsy(value)) {
//       delete result[key as K];
//     }
//   });
//   return result;
// };

export const cleanObj = (obj: { [key: string]: unknown }): {} => {
  // Reference http://semlinker.com/ts-keyof/
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    let value = result[key];
    if (isVoid(value)) {
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

export const useDebounce = <T>(value: T, time: number = 500): T => {
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

export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons);
  return {
    value,
    add: (person: T): void => {
      setValue([...value, { ...person }]);
    },
    removeIndex: (index: number): void => {
      const result = [...value];
      result.splice(index, 1);
      setValue(result);
    },
    clear: (): void => {
      setValue([]);
    },
  };
};

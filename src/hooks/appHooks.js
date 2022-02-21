import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const contacts = localStorage.getItem("phonebook");
    if (!contacts) {
      return;
    }
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  return [state, setState];
};

const hooks = {
  useLocalStorage,
};

export default hooks;

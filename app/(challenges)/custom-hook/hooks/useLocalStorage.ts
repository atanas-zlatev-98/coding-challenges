import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {

  const [value, setValue] = useState<T>(() => {
    
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue] as const;
}

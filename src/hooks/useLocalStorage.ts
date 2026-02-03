"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value]);

  const setLocalStorageValue: Dispatch<SetStateAction<T>> = (valueOrFn) => {
    setValue((prev) => {
      const newValue =
        valueOrFn instanceof Function ? valueOrFn(prev) : valueOrFn;
      return newValue;
    });
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;

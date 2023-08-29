"use client";

import { useState, useCallback } from "react";

type Item = Record<string, any>;

function useToggle<T extends Item>(
  list: T[],
  initialValue: T | null = null,
  activePropertyName: string = "isActive"
) {
  const [items, setItems] = useState(
    list.map((item) => ({
      ...item,
      [activePropertyName]: item === initialValue,
    }))
  );

  const toggleActiveState = useCallback(
    (itemToActivate: T) => {
      setItems((prevItems) => {
        const newItems = prevItems.map((item) => ({
          ...item,
          [activePropertyName]: item === itemToActivate,
        }));
        return newItems;
      });
    },
    [activePropertyName]
  );

  const selectedItem = items.find((item) => item[activePropertyName]);

  return [items, toggleActiveState, selectedItem] as const;
}

export default useToggle;

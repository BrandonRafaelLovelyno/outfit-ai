"use client"

import React, { useState, ReactNode } from "react";
import DemoResultContext from "@/context/demo-result";

export const DemoResultProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  return (
    <DemoResultContext.Provider
      value={{
        selectedIndex,
        setSelectedIndex,
      }}
    >
      {children}
    </DemoResultContext.Provider>
  );
};

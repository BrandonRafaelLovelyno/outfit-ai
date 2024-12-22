import DemoResultContext, { Context } from "@/context/demo-result"
import { useContext } from "react";

export const useDemoResult = (): Context => {
  const context = useContext(DemoResultContext);
  if (!context) {
    throw new Error("useDemoResult must be used within a DemoResultProvider");
  }
  return context;
};

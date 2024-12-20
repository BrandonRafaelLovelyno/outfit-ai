import ModelInputContext, { Context } from "@/context/model-input";
import { useContext } from "react";

export const useModelInput = (): Context => {
  const context = useContext(ModelInputContext);
  if (!context) {
    throw new Error("useModelInput must be used within a ModelInputProvider");
  }
  return context;
};

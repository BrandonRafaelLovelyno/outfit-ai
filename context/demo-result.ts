import { createContext } from "react";

export interface Context {
  selectedIndex: number | undefined;
  setSelectedIndex: (selectedIndex: number | undefined) => void;
}

const DemoResultContext = createContext<Context | undefined>(undefined);

export default DemoResultContext

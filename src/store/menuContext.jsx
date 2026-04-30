import { createContext } from "react";

export const MenuContext = createContext({
  activeBtn: "home",
  setActiveBtn: () => {},
});

import React, { createContext } from "react";
import HeaderData from "../data/HeaderData.json";

export const AppContext = createContext();

function AppProvider({ children }) {
  return (
    <AppContext.Provider value={{ navBar: HeaderData.navBar }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

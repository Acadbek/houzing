import { createContext } from "react";
import { PropertiesProvider } from "./properties";

const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <PropertiesProvider>
      <Root.Provider value={"hello"}>{children}</Root.Provider>
    </PropertiesProvider>
  );
};

export default RootContext;

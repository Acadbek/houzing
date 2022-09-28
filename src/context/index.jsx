import { Fragment } from "react";
import PropertiesProvider from "./properties";

// const Root = createContext();

const RootContext = ({ children }) => {
  return (
    <Fragment>
      <PropertiesProvider>{children}</PropertiesProvider>
    </Fragment>
  );
};

export default RootContext;

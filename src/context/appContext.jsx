/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

//create context
const Context = React.createContext();

const AppContext = ({ children }) => {
  const [params, setparams] = useState("feed");

  //wrap by provider
  return (
    <Context.Provider value={{ params, setparams }}>
      {children}
    </Context.Provider>
  );
};

//use context hook
const useGlobalContext = () => {
  return useContext(Context);
};

export { AppContext, useGlobalContext };

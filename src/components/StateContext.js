import React, { createContext, useContext, useState } from "react";

const Context = createContext();
export const StateContext = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <Context.Provider
      value={{
        showDetail,
        setShowDetail,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

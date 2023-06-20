import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [link, setLink] = useState("");
  return (
    <AppContext.Provider
      value={{
        isLoaded,
        link,
        setIsLoaded,
        setLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

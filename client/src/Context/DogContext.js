import React, { createContext, useState } from "react";

const initDogContext = {
  searchBaner: "",
};
export const DogContext = createContext(initDogContext);

export const DogContextProvider = ({ children }) => {
  const [searchBaner, setSearchBaner] = useState(initDogContext.searchBaner);
  return (
    <DogContext.Provider
      value={{
        searchBaner,
        setSearchBaner,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

import React, { createContext, useState } from "react";

const initDogContext = {
  searchBaner: "",
  dogs: [],
  loadingPage: true,
  favoritedDogs: [],
};
export const DogContext = createContext(initDogContext);
export const DogContextProvider = ({ children }) => {
  const [searchBaner, setSearchBaner] = useState(initDogContext.searchBaner);
  const [dogs, setDogs] = useState(initDogContext.dogs);
  const [loadingPage, setLoadingPage] = useState(initDogContext.loadingPage);
  const [favoritedDogs, setFavoritedDogs] = useState(
    initDogContext.favoritedDogs
  );

  return (
    <DogContext.Provider
      value={{
        searchBaner,
        setSearchBaner,
        dogs,
        setDogs,
        loadingPage,
        setLoadingPage,
        favoritedDogs,
        setFavoritedDogs,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

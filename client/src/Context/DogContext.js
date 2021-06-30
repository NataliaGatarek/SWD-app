import React, { createContext, useState } from "react";

const initDogContext = {
  searchBaner: "",
  dogs: [],
  loadingPage: true,
  favoritedDog: [],
};
export const DogContext = createContext(initDogContext);

export const DogContextProvider = ({ children }) => {
  const [searchBaner, setSearchBaner] = useState(initDogContext.searchBaner);
  const [dogs, setDogs] = useState(initDogContext.dogs);
  const [loadingPage, setLoadingPage] = useState(initDogContext.loadingPage);
  const [favoritedDog, setFavoritedDog] = useState(initDogContext.favoritedDog);

  return (
    <DogContext.Provider
      value={{
        searchBaner,
        setSearchBaner,
        dogs,
        setDogs,
        loadingPage,
        setLoadingPage,
        favoritedDog,
        setFavoritedDog,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

import React, { createContext, useState } from "react";

const initDogContext = {
  searchBaner: "",
  dogs: [],
  loadingPage: true,
  comments: [],
  likedDogs: [],
};
export const DogContext = createContext(initDogContext);
export const DogContextProvider = ({ children }) => {
  const [searchBaner, setSearchBaner] = useState(initDogContext.searchBaner);
  const [dogs, setDogs] = useState(initDogContext.dogs);
  const [loadingPage, setLoadingPage] = useState(initDogContext.loadingPage);
  const [comments, setComments] = useState(initDogContext.comments);
  const [likedDogs, setLikedDogs] = useState(initDogContext.likedDogs);

  return (
    <DogContext.Provider
      value={{
        searchBaner,
        setSearchBaner,
        dogs,
        setDogs,
        loadingPage,
        setLoadingPage,
        comments,
        setComments,
        likedDogs,
        setLikedDogs,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

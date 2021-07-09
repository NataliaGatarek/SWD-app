import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const { serverURL } = require("../config.js");
const initAuthContext = {
  userObject: "",
  loading: true, //true// when get the user
  displayDogs: [],
  favoritedDogs: [],
};
export const AuthContext = createContext(initAuthContext);
//adding token to the header///takes the token to the API and checkes if the user is autenticated//
export const AuthContextProvider = ({ children }) => {
  const [userObject, setUserObject] = useState(initAuthContext.userObject);
  const [loading, setLoading] = useState(initAuthContext.loading);
  const [displayDogs, setDisplayDogs] = useState(initAuthContext.displayDogs);
  const [favoritedDogs, setFavoritedDogs] = useState(
    initAuthContext.favoritedDogs
  );

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const fetchAuth = async () => {
      if (token !== null) {
        console.log(token !== null, userObject);
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const res = await axios.get(`${serverURL}/users/profile`, config);
        setUserObject(res.data);
        setDisplayDogs(res.data.dogs);
        setFavoritedDogs(res.data.favorites);
        setLoading(false);
        console.log(res.data);
      } else {
        setLoading(true);
      }
    };
    fetchAuth();
  }, [loading]);

  return (
    <AuthContext.Provider
      value={{
        setUserObject,
        userObject,
        loading,
        setLoading,
        displayDogs,
        setDisplayDogs,
        favoritedDogs,
        setFavoritedDogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

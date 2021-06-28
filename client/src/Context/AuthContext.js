import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initAuthContext = {
  userObject: [],
  loading: true, //true// when get the user
  displayDogs: [],
};
export const AuthContext = createContext(initAuthContext);
//adding token to the header///takes the token to the API and checkes if the user is autenticated//
export const AuthContextProvider = ({ children }) => {
  const [userObject, setUserObject] = useState(initAuthContext.userObject);
  const [loading, setLoading] = useState(initAuthContext.loading);
  const [displayDogs, setDisplayDogs] = useState(initAuthContext.displayDogs);
  useEffect(() => {
    const fetchAuth = async () => {
      const token = window.localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const res = await axios.get(
        "http://localhost:5000/users/profile",
        config
      );
      setUserObject(res.data);
      setDisplayDogs(res.data.dogs);
      setLoading(false);
      console.log(res.data);
    };

    fetchAuth();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        setUserObject,
        userObject,
        loading,
        setLoading,
        displayDogs,
        setDisplayDogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

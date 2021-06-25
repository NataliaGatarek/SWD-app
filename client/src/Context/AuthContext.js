import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initAuthContext = {
  newUser: [],
  loading: true, //true// when get the user
};
export const AuthContext = createContext(initAuthContext);
//adding token to the header///takes the token to the API and checkes if the user is autenticated//
export const AuthContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(initAuthContext.newUser);
  const [loading, setLoading] = useState(initAuthContext.newUser);
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
      setNewUser(res.data);
      setLoading(false);
      console.log(res.data);
    };

    fetchAuth();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        newUser,
        setNewUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

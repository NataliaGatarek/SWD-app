import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const initAuthContext = {
  newUser: [],
};
export const AuthContext = createContext(initAuthContext);

export const AuthContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(initAuthContext.newUser);
  useEffect(async () => {
    const token = window.localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get("http://localhost:5000/users/profile", config);
    setNewUser(res.data);
    console.log(res.data);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        newUser,
        setNewUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

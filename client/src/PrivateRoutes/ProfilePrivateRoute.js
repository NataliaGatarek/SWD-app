import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";

function ProfilePrivateRoute({ children, ...rest }) {
  const { userObject, setUserObjectm, loading, setLoading } =
    useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !loading ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/SignIn",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default ProfilePrivateRoute;

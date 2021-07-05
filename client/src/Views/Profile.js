import React, { useContext, useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PetsIcon from "@material-ui/icons/Pets";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "../Context/AuthContext";
import DsiplayFav from "../Components/DisplayFav.js";
import DisplayProfileYourDogs from "../Components/DisplayProfileYourDogs";
import { DogContext } from "../Context/DogContext.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      minWidth: theme.spacing(45),
      minHeight: theme.spacing(25),
    },
  },
}));

function Profile() {
  const classes = useStyles();
  const {
    userObject,
    displayDogs,
    favoritedDogs,
    setFavoritedDogs,
    loading,
    setLoading,
  } = useContext(AuthContext);
  //const { loadingPage, setLoadingPage } = useContext(DogContext);

  useEffect(() => {
    if (userObject) {
      setLoading(true);
    }
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <h1 className="header-style">Welcome to your profile</h1>
          <h2 className="header-style">
            Add your dog{" "}
            <Link to="/AddDog">
              {" "}
              <PetsIcon />{" "}
            </Link>
          </h2>
          <div className={classes.root}>
            <Paper elevation={12}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <p>
                  <strong>Your information:</strong>
                </p>
                <p>
                  {userObject.firstName} {userObject.lastName}
                </p>
                <p> {userObject.email}</p>
              </Typography>
            </Paper>
            <Paper elevation={12}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <strong>Your favorites:</strong>
                <p>
                  you have currently {userObject.favorites.length} favorites
                </p>
                <div>
                  {favoritedDogs.map((favoritedDog) => {
                    return (
                      <DsiplayFav
                        key={favoritedDog.id}
                        favoritedDogs={favoritedDog}
                      />
                    );
                  })}
                </div>
              </Typography>
            </Paper>
            <Paper elevation={12}>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <strong>Your dogs:</strong>
                <p>you added dogs</p>
                <div>
                  {displayDogs.map((displayDog) => {
                    return (
                      <DisplayProfileYourDogs
                        key={displayDog.id}
                        displayDogs={displayDog}
                      />
                    );
                  })}
                </div>
              </Typography>
            </Paper>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;

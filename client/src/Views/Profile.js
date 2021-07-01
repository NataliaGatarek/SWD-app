import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PetsIcon from "@material-ui/icons/Pets";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { AuthContext } from "../Context/AuthContext";
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
      minHeight: theme.spacing(32),
    },
  },
}));
function Profile() {
  const classes = useStyles();
  const { userObject, displayDogs, favoritedDogs, setFavoritedDogs } =
    useContext(AuthContext);

  return (
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
            <p>{userObject.firstName}</p>
            <p>{userObject.lastName}</p>
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
            <div>
              {favoritedDogs.map((favoritedDog) => {
                return (
                  <div key={favoritedDog.id} favoritedDogs={favoritedDog}>
                    <p>{favoritedDog.name} </p>
                    <p>{favoritedDog.description}</p>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      //onClick={() => fetchDeleteComment()}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                    <hr></hr>
                  </div>
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
            <div>
              {displayDogs.map((displayDog) => {
                return (
                  <div key={displayDog.id} displayDogs={displayDog}>
                    <p>{displayDog.name} </p>
                    <p>{displayDog.description}</p>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      //onClick={() => fetchDeleteComment()}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                    <hr></hr>
                  </div>
                );
              })}
            </div>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
export default Profile;

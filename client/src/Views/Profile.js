import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PetsIcon from "@material-ui/icons/Pets";
import Paper from "@material-ui/core/Paper";
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
      width: theme.spacing(45),
      height: theme.spacing(32),
    },
  },
}));
function Profile() {
  const classes = useStyles();
  const { newUser } = useContext(AuthContext);

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
        <Paper elevation={3}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            <p>
              <strong>Your information:</strong>
            </p>
            <p>{newUser.firstName}</p>
            <p>{newUser.lastName}</p>
            <p> {newUser.email}</p>
          </Typography>
        </Paper>
        <Paper elevation={3}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Your favorites
          </Typography>
        </Paper>
        <Paper elevation={3}>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Your dogs
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
export default Profile;

import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PetsIcon from "@material-ui/icons/Pets";
import { AuthContext } from "../Context/AuthContext";
import DsiplayFav from "../Components/DisplayFav.js";
import DisplayProfileYourDogs from "../Components/DisplayProfileYourDogs";
import Container from "@material-ui/core/Container";
import swd2 from "../pictures/swd2.jpg";
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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
}));

function Profile() {
  const classes = useStyles();
  const { userObject, displayDogs, favoritedDogs, loading, setLoading } =
    useContext(AuthContext);

  useEffect(() => {
    if (userObject) {
      setLoading(true);
    }
  }, []);
  return (
    <div>
      {!loading ? (
        <div>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <img src={swd2} alt="swd" />
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Welcome {userObject.firstName}
              </Typography>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Add your dog{" "}
                <Link to="/AddDog">
                  {" "}
                  <PetsIcon />{" "}
                </Link>
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <hr></hr>
                <strong>Your information:</strong>
                <p>
                  {" "}
                  {userObject.firstName} {userObject.lastName}
                </p>
                <p> {userObject.email}</p>
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <hr></hr>
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
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                <hr></hr>
                <strong>Your dogs:</strong>
                <p>you added {userObject.dogs.length} dogs</p>
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
            </Container>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Profile;

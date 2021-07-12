import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { AuthContext } from "../Context/AuthContext";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

const { serverURL } = require("../config.js");
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    minWidth: 275,
    margin: theme.spacing(1),
  },
  details: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 120,
    height: 120,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
function DisplayProfileYourDogs(props) {
  const classes = useStyles();
  const { userObject } = useContext(AuthContext);
  //let { id } = useParams();
  console.log(`props`, props);
  console.log(props.displayDogs._id); //this is the id of the dog//
  let dogId = props.displayDogs._id;
  console.log(dogId);

  const deleteDog = (event) => {
    event.preventDefault(event);

    fetch(`${serverURL}/dogs/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        dogId: props.displayDogs._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*const deleteDog = async () => {
    const body = {
      userId: userObject._id,
      dogId: props.displayDogs._id,
    };
    const res = await axios.post("http://localhost:5000/dogs/deletedog", body);
    console.log(res);
  }; */
  /* const deleteDog = () => {
    fetch(`http://localhost:5000/dogs/${dogId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        dogId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */
  return (
    <Card className={classes.root} elevation={12}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image={props.displayDogs.image}
          title="dog"
        />
        <CardContent className={classes.content}>
          <Typography component="h1" variant="h6">
            {props.displayDogs.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Likes: {props.displayDogs.liked.length}
            <hr></hr>
            <Button size="small" color="primary" onClick={deleteDog}>
              Remove the Dog
            </Button>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
export default DisplayProfileYourDogs;

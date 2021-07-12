import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  //console.log(`props`, props);
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
        history.push("/Removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

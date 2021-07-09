import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./views.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comment from "../Components/Comment.js";
import DoneComment from "../Components/DoneComment.js";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../Context/AuthContext";
import { DogContext } from "../Context/DogContext";
const { serverURL } = require("../config.js");
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const useStyles = makeStyles({
  paper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "grey",
  },
  media: {
    height: 240,
  },
});

function CardToDisplayTheDog() {
  const classes = useStyles();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  let { id } = useParams();
  const { userObject, favoritedDogs, setFavoritedDogs } =
    useContext(AuthContext);
  const { comments, setComments, likedDogs, setLikedDogs } =
    useContext(DogContext);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    fetchDog();
  }, [toggle]);
  const fetchDog = () => {
    fetch(`http://localhost:5000/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setComments(data.comments);
        //setLikedDogs(data.liked); //created this one in the dogs contexts, did not help//
        //setFavoritedDogs(data.favorites); //should be data. what? favorites are part of the users model, why if I change it to liked is giving null?//
      });
  };
  const favoriteAdd = (id) => {
    fetch("http://localhost:5000/users/favorite", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        dogId: id,
        userId: userObject._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("added fav");
        setToggle(!toggle);
        //setDetails(details.liked.push(userObject));
        //setLikedDogs(data.liked);
        setError(``);
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };

  const favoriteRemove = (id) => {
    fetch(`${serverURL}/users/unfavorite`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        dogId: id,
        userId: userObject._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        console.log("removed fav");
        setToggle(!toggle);
        setError(``);
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };
  console.log(id);
  console.log(userObject._id);

  const checkIfFav = () => {
    let button;
    if (details.liked.length === 0) {
      button = (
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            favoriteAdd(id);
          }}
        >
          add to favorites
        </Button>
      );
    } else {
      details.liked.forEach((like) => {
        console.log(like.id);
        if (like._id === userObject._id) {
          button = (
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                favoriteRemove(id);
              }}
            >
              remove from favorites
            </Button>
          );
        } else {
          button = (
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                favoriteAdd(id);
              }}
            >
              add to favorites
            </Button>
          );
        }
      });
    }
    return button;
  };
  return (
    <div>
      {details !== null ? (
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={details.image}
                title="Dog"
              />
              <CardActions>{checkIfFav()}</CardActions>
              <CardContent>
                <p style={{ marginTop: "1px" }}>
                  Favorited: <strong>{details.liked.length}</strong>
                </p>
                <Typography gutterBottom variant="h5" component="h2">
                  Name: <strong>{details.name}</strong>
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  Breeding Kennel: <strong>{details.kennel}</strong>
                </Typography>
                <hr></hr>
                <Typography variant="body2" color="textSecondary" component="p">
                  {details.description}
                </Typography>
                <hr></hr>
                <Typography gutterBottom component="p">
                  Location: {details.live}
                </Typography>
                <Typography gutterBottom component="p">
                  Titles: {details.titles}
                </Typography>
                <Typography gutterBottom component="p">
                  Date of Birth: {details.birth}
                </Typography>
                <Typography gutterBottom component="p">
                  Mother and Father: {details.mname}, {details.fname}
                </Typography>
                <Typography gutterBottom component="p">
                  Breeding dog: {details.breedingdog}
                </Typography>
                <Typography gutterBottom component="p">
                  Are you a breeder?: {details.breeder}
                </Typography>
                <Typography gutterBottom component="p">
                  Heatlh info: {details.heatlh}
                </Typography>
                <Typography gutterBottom component="p">
                  More info: {details.additional}
                </Typography>
                <Typography gutterBottom component="p">
                  Contact: {details.contact}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <hr></hr>
          <div className="flex-cards">
            <Comment />
            {comments.map((comment) => {
              return (
                <DoneComment
                  key={comment._id}
                  comment={comment}
                  commentId={comment._id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default CardToDisplayTheDog;

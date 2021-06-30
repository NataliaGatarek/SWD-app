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
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { AuthContext } from "../Context/AuthContext";
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
  const [comments, setComments] = useState([]);
  const [details, setDetails] = useState("");
  const [data, setData] = useState([]);
  let { id } = useParams();
  const { userObject, favoritedDogs, setFavoritedDogs } =
    useContext(AuthContext);
  useEffect(() => {
    fetchDog();
  }, []);
  const fetchDog = () => {
    fetch(`http://localhost:5000/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setComments(data.comments);
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

        /* const newData = favoritedDogs.map((favoritedDog) => {
          if (favoritedDog._id == data._id) {
            return data;
          } else {
            return favoritedDog;
          }
        });
        setFavoritedDogs(newData); */
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(userObject);
  console.log(id);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={details.image}
            title="Dog"
          />
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={() => {
                  favoriteAdd(id);
                }}
              />
            </IconButton>
          </CardActions>
          <CardContent>
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
  );
}
export default CardToDisplayTheDog;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./views.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comment from "../Components/Comment.js";
import DoneComment from "../Components/DoneComment.js";
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
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setComments(data.comments);
      });
  }, []);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={details.image}
            title="Dog"
          />
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

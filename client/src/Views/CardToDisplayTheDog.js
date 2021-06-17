import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comment from "../Components/Comment.js";
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
  const [details, setDetails] = useState("");
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/dogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, []);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={details.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name:{details.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Breeding Kennel:{details.kennel}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: {details.description}
            </Typography>
            <Typography gutterBottom component="p">
              Where do dog live:{details.live}
            </Typography>
            <Typography gutterBottom component="p">
              Titles:{details.titles}
            </Typography>
            <Typography gutterBottom component="p">
              Date of Birth:{details.birth}
            </Typography>
            <Typography gutterBottom component="p">
              Mother and Father:{details.mname}, {details.fname}
            </Typography>
            <Typography gutterBottom component="p">
              Breeding dog: {details.breedingdog}
            </Typography>
            <Typography gutterBottom component="p">
              Heatlh info:{details.heatlh}
            </Typography>
            <Typography gutterBottom component="p">
              More info: {details.additional}
            </Typography>
            <Typography gutterBottom component="p">
              Contact:{details.contact}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Comment />
    </div>
  );
}
export default CardToDisplayTheDog;

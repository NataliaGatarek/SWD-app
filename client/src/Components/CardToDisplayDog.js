import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import picture from "../pictures/picture.JPG";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardToDisplayDog(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.dogs.image}
          title="dog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.dogs.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {props.dogs.kennel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.dogs.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to={`CardToDisplayTheDog/${props.dogs._id}`}>
          <Button size="small" color="primary">
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
export default CardToDisplayDog;

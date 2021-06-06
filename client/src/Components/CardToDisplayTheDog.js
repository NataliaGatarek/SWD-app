import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comment from "./Comment.js";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "grey",
  },
  media: {
    height: 140,
  },
});

function CardToDisplayTheDog() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name of the Dog
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Breeding Kennel
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description
            </Typography>
            <Typography gutterBottom component="p">
              Where do dog live
            </Typography>
            <Typography gutterBottom component="p">
              Titles:
            </Typography>
            <Typography gutterBottom component="p">
              Date of Birth:
            </Typography>
            <Typography gutterBottom component="p">
              Mother and Father
            </Typography>
            <Typography gutterBottom component="p">
              Breeding dog yes or not
            </Typography>
            <Typography gutterBottom component="p">
              Heatlh info
            </Typography>
            <Typography gutterBottom component="p">
              More info
            </Typography>
            <Typography gutterBottom component="p">
              Constact info
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Comment />
    </div>
  );
}
export default CardToDisplayTheDog;

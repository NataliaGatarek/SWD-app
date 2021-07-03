import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
    width: 100,
    height: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
function DisplayFav(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image={props.favoritedDogs.image}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.favoritedDogs.kennel}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.favoritedDogs.name}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
export default DisplayFav;

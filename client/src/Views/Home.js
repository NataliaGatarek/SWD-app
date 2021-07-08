import React, { useState, useEffect, useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardToDisplayNewest from "../Components/CardToDisplayNewest.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DogContext } from "../Context/DogContext.js";
import swd from "../pictures/swd.jpg";
import "../Views/views.css";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

function Home() {
  const classes = useStyles();
  const [newest, setNewest] = useState([]);
  const { loadingPage, setLoadingPage } = useContext(DogContext);

  const fetchApiTwo = () => {
    fetch("http://localhost:5000/dogs/newest")
      .then((response) => response.json())
      .then((data) => {
        setNewest(data);
        setLoadingPage(false);
      })
      .catch((error) => {
        console.error("Something went wrong", error);
      });
  };
  useEffect(() => {
    fetchApiTwo();
  }, [setNewest, setLoadingPage]);
  return (
    <div>
      {!loadingPage ? (
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative"></AppBar>
          <main>
            <div className={classes.heroContent}>
              <Container>
                <img src={swd} alt="swd" />
              </Container>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Spanish Water Dog
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  the social network of spanish waterdogs in Poland
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Link to="/ListOfDogs">
                        <Button variant="contained" size="large">
                          List of all the dogs
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/Breeders">
                        <Button variant="outlined" size="small">
                          List of FCI Polish Breeders
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Latest added dogs
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  {newest.map((newest) => {
                    return (
                      <div className="home">
                        <CardToDisplayNewest key={newest.id} newest={newest} />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </Container>
          </main>
        </React.Fragment>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
}
export default Home;

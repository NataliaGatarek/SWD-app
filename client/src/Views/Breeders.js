import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import swd2 from "../pictures/swd2.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Breeders() {
      const classes = useStyles();
    return (
         <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Container maxWidth="sm">
        <img src={swd2} alt="swd" />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Currently in Poland there are 9 official kennels of the Spanish Water Dog (FCI). We encourage those interested in the breed to contact only such breeders. To learn more about specific dogs please go to the "All Dogs" section where you can learn more about a dog's health, titles and past of the dog.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
                        <Grid xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                                       <strong>Bona Espero FCI</strong><p>Czechowice-Dziedzice, woj. Śląskie
                                            ZKwP Oddział Bielsko-Biała</p>
                    </Typography>
                    <Typography>
                      Home breeding with passion supported by many years of experience in the breed, 5 generations a female family, including currently 3 breeding females. Health is our priority,character and exterior, we offer comprehensive help and support to puppy owners.
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <strong>Canis Marinus FCI</strong>
<p>Żelechów gm.Żabia Wola, woj. mazowieckie
ZKWP Oddział Warszawa</p>
                    </Typography>
                    <Typography>
                     I am happy to answer any questions from people interested in getting to know the breed better before
will decide to book / buy a puppy.
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <strong>Czekoladowa Costa Brava FCI</strong>
<p>woj. Podkarpackie
ZKWP Odział Rzeszów</p>
                    </Typography>
                    <Typography>
                      Chocolate Costa Brava Kennel Spanish Water Dog ZKwP FCI
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     <strong>Pearls in Furs FCI</strong>
<p>05-084 Marianów, al.Wierzbowa 12 woj. Mazowieckie,
ZKWP Oddział Warszawa</p>
                    </Typography>
                    <Typography>
                      Contact via FB website: Pearls in Furs FCI - Hiszpański Pies Dowodny
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     <strong>Perro de Campo FCI</strong> 
<p>Młochów, woj. Mazowieckie
ZKWP Oddział Warszawa</p>
                    </Typography>
                    <Typography>
                     Contact via FB.
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     <strong>Perroestrella FCI</strong> 
<p>Komorów, woj. Mazowieckie,
ZKWP Oddział Warszawa </p>
                    </Typography>
                    <Typography>
                      Contact via FB : Kennel Perroestrella - Spanish Water Dog
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                 <strong>Rewelka FCI</strong>
<p>Kotulin, woj.Śląskie
ZKWP Oddział Bytom</p>
                    </Typography>
                    <Typography>
                      In our kennel we have 2 breeding females and a stud dog imported from Spain.
                    </Typography>
                  </CardContent>
                            </Card>
                             <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <strong>Toddini FCI</strong>
<p>Strzyżów, woj. Podkarpackie,
ZKwP Oddział Rzeszów</p>
                    </Typography>
                    <Typography>
                    We are a small family kennel, we have 3 spoiled Spanish Water Dogs.
                    </Typography>
                  </CardContent>
                            </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
    )
}
export default Breeders;
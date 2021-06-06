import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./views.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddDog() {
  const classes = useStyles();
  return (
    <div>
      <h1 className="header-style">
        {" "}
        Please fill out the form to add your dog{" "}
      </h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        className="flex-form"
      >
        <TextField id="standard-basic" label="Name of the dog" />
        <TextField id="standard-basic" label="Breeding kennel" />
        <TextField id="standard-basic" label="Where do the dog lives" />
        <TextField
          id="outlined-multiline-static"
          label="Information about the dog"
          multiline
          rows={4}
          defaultValue="Description of the dog"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Titles of the dog"
          multiline
          rows={4}
          defaultValue="Titles of the dog"
          variant="outlined"
        />
        <TextField id="standard-basic" label="Date of birth" />
        <TextField id="standard-basic" label="Full name of the mother" />
        <TextField id="standard-basic" label="Full name of the father" />
        <p>Is she/he breeding dog?</p>
        <Checkbox name="Yes" color="primary" />
        <Checkbox name="No" color="primary" />
        <TextField
          inputProps={{ style: { alignItems: "center" } }}
          id="outlined-multiline-static"
          label="Information about the heatlh of the dog"
          multiline
          rows={4}
          defaultValue="Heatlh information"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="additional information, e.g. whether the dog was bred"
          multiline
          rows={4}
          defaultValue="More iformation"
          variant="outlined"
        />
        <p>Upload a picture of your dog</p>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-photo"
          //onChange={this.handleCapture}
          type="file"
        />
        <TextField id="standard-basic" label="Your contact information" />
        <Button variant="contained">Add your dog</Button>
      </form>
    </div>
  );
}
export default AddDog;

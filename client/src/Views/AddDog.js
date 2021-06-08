import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
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
        <TextField id="standard-basic" label="Where does the dog live" />
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
        <p>Are you a breeder?</p>
        <RadioGroup
          aria-label="breeding"
          name="breeding"
          //value={value}
          //onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        <p>Is your dog a breeding dog?</p>
        <RadioGroup
          aria-label="breeding"
          name="breeding"
          // value={value}
          //onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Views/views.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Comment(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="flex-form">
        <TextField
          id="standard-multiline-static"
          label="Add your comment"
          multiline
          rows={4}
          defaultValue="comment"
        />
        <Button variant="contained">Add your comment</Button>
      </div>
    </form>
  );
}
export default Comment;

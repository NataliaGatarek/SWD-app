import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../Views/views.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

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
  let { id } = useParams();
  const [text, setText] = useState('');

  //posting new comment//
 /*  const [formComment, setFormComment] = useState({
    text: ""
  });
  const {
    comment,
  } = formComment; */
 /*  const onChange = (e) =>
    setFormComment({ ...formComment, [e.target.name]: e.target.value });
  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetchDataComment();
    console.log("success"); 
  };*/
  const fetchDataComment=()=> {
    fetch(`http://localhost:5000/dogs/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchDataComment();
},[]);
  return (
    <form className={classes.root} noValidate autoComplete="off"  onSubmit={e => {
          e.preventDefault();
          fetchDataComment({ text });
          setText('');
        }}>
      <div className="flex-form">
         <TextField
          id="outlined-multiline-static"
          label="Add your comment"
          multiline
          rows={4}
          defaultValue="Add your comment"
          variant="outlined"
          name="comment"
          id="comment"
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button variant="contained" type="submit">Add your comment</Button>
      </div>
    </form>
  );
}
export default Comment;

import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { AuthContext } from "../Context/AuthContext";
import { DogContext } from "../Context/DogContext";
import "../Views/views.css";
import avatar from "../pictures/picture1.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const { serverURL } = require("../config.js");

function Comment(props) {
  let { id } = useParams();
  const { userObject } = useContext(AuthContext);
  const { setComments } = useContext(DogContext);
  const [text, setText] = useState("");
  const fetchDataComment = () => {
    fetch(`${serverURL}/dogs/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        userId: userObject._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="comment-main">
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          fetchDataComment({ text });
          setText("");
        }}
      >
        <Paper elevation={10} style={{ height: "140px", width: "300px" }}>
          <div className="comment">
            <div>
              <p className="tag">{userObject.firstName}</p>
              <img src={avatar} alt="avatar" className="round-img" />
            </div>
            <div>
              <TextField
                style={{ height: "100px", width: "200px" }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Add your comment"
                name="comment"
                id="comment"
                autoFocus
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                type="submit"
                size="small"
                variant="outlined"
                color="primary"
              >
                Add your comment
              </Button>
            </div>
          </div>
        </Paper>
      </form>
    </div>
  );
}
export default Comment;

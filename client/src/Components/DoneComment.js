import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../Views/views.css";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import avatar from "../pictures/picture1.png";
import "../Views/views.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Comment(props) {
  const history = useHistory();
  const classes = useStyles();
  let { id } = useParams();
  const { text, userName } = props.comment;
  const { commentId } = props;
  console.log(props);
  const fetchDeleteComment = () => {
    fetch(`http://localhost:5000/dogs/comments/${id}/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="comment-main">
      <Paper elevation={10} style={{ height: "140px", width: "300px" }}>
        <div className="comment">
          <div>
            <p className="tag">{userName}</p>
            <img src={avatar} alt="avatar" className="round-img" />
          </div>
          <div>
            <Typography align="center" className="typ">
              {text}
            </Typography>
          </div>
          <div>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              onClick={() => fetchDeleteComment()}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
}
export default Comment;
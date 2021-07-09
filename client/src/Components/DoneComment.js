import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../Views/views.css";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import avatar from "../pictures/picture1.png";
import { AuthContext } from "../Context/AuthContext";
import { DogContext } from "../Context/DogContext";
import "../Views/views.css";
const { serverURL } = require("../config.js");
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
  const { userObject } = useContext(AuthContext);
  const { setComments } = useContext(DogContext);
  const classes = useStyles();
  let { id } = useParams();
  const { text, userName, userId } = props.comment;
  const { commentId } = props;
  console.log(props);
  const fetchDeleteComment = () => {
    fetch(`${serverURL}/dogs/comments/${id}/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        commentId,
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
            {userObject._id === userId && (
              <IconButton
                aria-label="delete"
                className={classes.margin}
                onClick={() => fetchDeleteComment()}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
}
export default Comment;

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import "../Views/views.css";
import { Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
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
     const classes = useStyles();
    let { id } = useParams();
    const { text, } = props.comment;
    const { commentId } = props;
    console.log(props);
     const fetchDeleteComment=()=> {
     fetch(`http://localhost:5000/dogs/comments/${id}/${commentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     commentId
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
    return (
        <div>
            <Paper elevation={3} style={{"height": "100px", "width":"300px"}}>
                <Typography align="center">{text}</Typography>
               <IconButton aria-label="delete" className={classes.margin} onClick={() => fetchDeleteComment()}>
          <DeleteIcon fontSize="small" />
        </IconButton>
               </Paper>

               
            </div>
    );
}
export default Comment;
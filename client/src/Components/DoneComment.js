import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import "../Views/views.css";
import { Typography } from "@material-ui/core";


function Comment(props) {
    return (
        <div>
            <Paper elevation={3}>
                <Typography>{props.comment.text}</Typography>
               </Paper>

               
            </div>
    );
}
export default Comment;
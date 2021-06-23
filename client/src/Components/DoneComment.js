import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import "../Views/views.css";
import { Typography } from "@material-ui/core";


function Comment(props) {
    return (
        <div>
            <Paper elevation={3} style={{"height": "100px", "width":"300px"}}>
                <Typography align="center">{props.comment.text}</Typography>
               </Paper>

               
            </div>
    );
}
export default Comment;
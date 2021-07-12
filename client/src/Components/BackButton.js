import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Badge from "@material-ui/core/Badge";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

function BackButton(props) {
  const history = useHistory();
  const BackHistory = () => {
    history.goBack();
  };
  return (
    <div>
      <Badge color="secondary">
        <KeyboardBackspaceIcon onClick={BackHistory} />
      </Badge>
    </div>
  );
}
export default BackButton;

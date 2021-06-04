import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home.js";

function App() {
  return (
    <div>
      <Home />
      <SignIn />
    </div>
  );
}

export default App;

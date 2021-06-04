import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";
import Home from "./Views/Home.js";
import ListOfDogs from "./Views/ListOfDogs.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
        <Route exact path="/ListOfDogs">
          <ListOfDogs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

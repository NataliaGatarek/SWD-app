import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";
import Home from "./Views/Home.js";
import CardToDisplayTheDog from "./Components/CardToDisplayTheDog.js";
import Profile from "./Views/Profile.js";
import ListOfDogs from "./Views/ListOfDogs.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import AddDog from "./Views/AddDog.js";

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
        <Route exect path="/SignUp">
          <SignUp />
        </Route>
        <Route exect path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/ListOfDogs">
          <ListOfDogs />
        </Route>
        <Route exect path="/CardToDisplayTheDog">
          <CardToDisplayTheDog />
        </Route>
        <Route exact path="/AddDog">
          <AddDog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

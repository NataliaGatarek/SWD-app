import SignIn from "./Views/SignIn.js";
import SignUp from "./Views/SignUp.js";
import Home from "./Views/Home.js";
import CardToDisplayTheDog from "./Views/CardToDisplayTheDog.js";
import Profile from "./Views/Profile.js";
import ListOfDogs from "./Views/ListOfDogs.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import AddDog from "./Views/AddDog.js";
import { DogContextProvider } from "./Context/DogContext.js";
import { AuthContextProvider } from "./Context/AuthContext.js";

function App() {
  return (
    <AuthContextProvider>
      <DogContextProvider>
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
            <Route exect path="/CardToDisplayTheDog/:id">
              <CardToDisplayTheDog />
            </Route>
            <Route exact path="/AddDog">
              <AddDog />
            </Route>
          </Switch>
        </Router>
      </DogContextProvider>
    </AuthContextProvider>
  );
}

export default App;

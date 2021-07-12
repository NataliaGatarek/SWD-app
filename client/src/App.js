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
import ProfilePrivateRoute from "./PrivateRoutes/ProfilePrivateRoute.js";
import Breeders from "./Views/Breeders.js";
import Removed from "./Views/Removed.js";

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
            <ProfilePrivateRoute
              children={<Profile />}
              exact
              path="/Profile"
            ></ProfilePrivateRoute>
            <Route exact path="/ListOfDogs">
              <ListOfDogs />
            </Route>
            <Route exact path="/Breeders">
              <Breeders />
            </Route>
            <Route exact path="/Removed">
              <Removed />
            </Route>
            <ProfilePrivateRoute
              children={<CardToDisplayTheDog />}
              exact
              path="/CardToDisplayTheDog/:id"
            ></ProfilePrivateRoute>
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

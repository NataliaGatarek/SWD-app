import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import PetsIcon from "@material-ui/icons/Pets";
import BackButton from "./BackButton.js";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import "../Views/views.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const { serverURL } = require("../config.js");

function NavBar(props) {
  const classes = useStyles();
  const token = window.localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const history = useHistory();
  const { userObject, setUserObject, loading, setLoading } =
    useContext(AuthContext);
  const handleLogout = async () => {
    const user = { _id: userObject._id };
    setUserObject([]);
    setLoading(true);
    window.localStorage.removeItem("token");
    history.push("/");
    await axios.post(`${serverURL}/users/logout`, user);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="alldogs" color="inherit">
          <Badge color="secondary">
            <PetsIcon />
          </Badge>
        </IconButton>
        <Link to="/ListOfDogs">All dogs</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Link to="/Profile">Profile</Link>
      </MenuItem>
      {loading ? (
        <MenuItem>
          <IconButton aria-label="signin" color="inherit">
            <Badge color="secondary">
              <LockOpenIcon />
            </Badge>
          </IconButton>
          <Link to="/SignIn">Sign In</Link>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleLogout}>
          <IconButton aria-label="signin" color="inherit">
            <Badge color="secondary">
              <LockIcon />
            </Badge>
          </IconButton>
          <p>Sign out</p>
        </MenuItem>
      )}
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "lightgray" }}>
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Link>
          <IconButton
            aria-label="back"
            color="inherit"
            style={{ marginLeft: "30%" }}
          >
            <BackButton />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/SignIn">
              <IconButton aria-label="profile" color="inherit">
                <Badge color="secondary">
                  <LockOpenIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="Sign out">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
                <LockIcon />
              </IconButton>
            </Link>
            <Link to="/ListOfDogs">
              <IconButton aria-label="dogs" color="inherit">
                <Badge color="secondary">
                  <PetsIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="Profile">
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}{" "}
    </div>
  );
}
export default NavBar;

const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const secretOrKey = require("../config.js").secretOrKey;
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const passport = require("passport"); //this is will use once the private routes are set//

//register
router.post(
  "/",
  body("firstName", "Name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("email", "Please include a valid email").isEmail(),
  body(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    try {
      //see if user exists
      let user = await User.findOne({ email });
      //search by something, here search by email because its unique
      if (user) {
        res.user.status(400).json({ errors: [{ msg: "User already exists" }] });
        //this set up of the error makes sure that errors are same on client and server side
      }
      //enctpt the password
      //1.creating salt to hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPw = await bcrypt.hash(req.body.password, salt);

      //new user
      user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPw,
      });
      await user.save();
      res.send("User registered");
    } catch (error) {}
    console.log(error.message);
    res.status(500).send("Server error");
  }
);

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      res.send("Email does not exist");
    } else {
      bcrypt.compare(password, user.password, function (err, result) {
        console.log(result);
        if (err) {
          res.send(err);
        }
        if (result) {
          const options = {
            id: user._id,
          };
          const token = jwt.sign(options, secretOrKey, { expiresIn: "20d" });
          console.log(token);
          res.json({
            success: true,
            token: token,
          });
        } else {
          res.send("password does not match");
        }
      });
    }
  });
});

//get the profile to display the user//
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newUser = {
      _id: req.user._id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      favorites: req.user.favorites,
      dogs: req.user.dogs,
    };
    //newUser.populate("dogs", ["name", "image", "kennel", "description"]);
    console.log(newUser);
    res.send(newUser);
  }
);

router.get(
  "/logout",
  //passport.authenticate("jwt", { session: false }),
  function (req, res) {
    req.logout();
    res.redirect("/");
  }
);

module.exports = router;

/* router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const newUser = await User.findOne({
        user: req.user.id,
        firstName: req.user.firstName,
      }).populate("dog");

      if (!newUser) {
        return res
          .status(400)
          .json({ msg: "There is no profile for this user" });
      }
      res.json(newUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
); */
/* try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    res.status(200).json({ _id: user._id, username: user.username });
    //payload and sign the token again here//
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
 */
/* router.get("/test", (req, res) => {
  usersModel.find({}, function (err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
}); */

/* router.get("/:id", (req, res) => {
  let usersId = req.params.id;
  usersModel
    .findById(usersId)
    .populate("dogs")
    .exec(function (err, users) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(users.dogs);
        res.send(users);
      }
    });
});  */

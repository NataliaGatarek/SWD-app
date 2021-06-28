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
        login: false,
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
  const user = await User.findOne({ email: email }, (err, user) => {
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
  if (user) {
    user.login = true;
    await user.save();
  }
});

//get the profile to display the user//
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user._id)
      .populate("dogs", ["name", "kennel", "image", "description"])
      .exec(function (err, user) {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          const userObject = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            favorites: user.favorites,
            dogs: user.dogs,
          };
          console.log(userObject);
          res.send(userObject);
        }
      });
  }
);
/*  newUser
      .find({})
      .populate({path:"dogs", select: ["name", "kennel","image", "description"]})
      .then((NewUser) => {
        res.send(NewUser);
        console.log(newUser);
      })
      .catch((err) => res.send(err));
  }
); */

//newUser.find({ _id: req.user._id }).populate("dogs");
//populate("dogs", ["name", "kennel","image", "description");

router.post("/logout", async (req, res) => {
  const id = req.body._id;
  await User.findOneAndUpdate({ _id: id }, { $set: { login: false } });
});

/* router.get("/:id", (req, res) => {
  let usersId = req.params.id;
  User
    .findById(usersId)
    .populate("dogs", ["name", "kennel","image", "description"])
    .exec(function (err, users) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log(users.dogs);
        res.send(users);
      }
    });
}); */

module.exports = router;

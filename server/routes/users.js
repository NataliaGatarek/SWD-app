const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const dogsModel = require("../models/dogsModel");
const jwt = require("jsonwebtoken");
const secretOrKey = require("../config.js").secretOrKey;
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const passport = require("passport"); //this is will use once the private routes are set//

//register
router.post(
  "/",
  check("firstName").notEmpty().withMessage("Name is required"),
  check("lastName").notEmpty().withMessage("Last Name is required"),
  check("email").notEmpty().isEmail().withMessage("Email is required"),
  check("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      User.findOne({ email: email }, async (err, user) => {
        if (err) {
          res.json({ error: err });
        }
        if (user) {
          res.send("Email is already used");
        }
        if (!firstName || !lastName || !email || !password) {
          return res.send("All fields are required");
        } else {
          // express validator
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          //enctpt the password
          //1.creating salt to hash the password
          const salt = await bcrypt.genSalt(10);
          const hashedPw = await bcrypt.hash(req.body.password, salt);

          //new user
          const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPw,
            login: false,
          });
          await user.save();
          res.send("User registered, please Sign In");
        }
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server error");
    }
  }
);

//login
router.post("/login", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const options = {
      id: user._id,
    };
    const token = jwt.sign(options, secretOrKey, { expiresIn: "20d" });
    console.log(token);
    res.json({
      success: true,
      token: token,
    });
    if (user) {
      user.login = true;
      await user.save();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

/* const user = await User.findOne({ email: email }, (err, user) => {
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
          res.send("Password does not match");
        }
      });
    }
  });
  if (user) {
    user.login = true;
    await user.save();
  }
}); */

//get the profile to display the user//
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user._id)
      .populate("dogs", ["name", "kennel", "image", "description", "liked"])
      .populate("favorites", ["name", "kennel", "image", "description"])
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
//logout
router.post("/logout", async (req, res) => {
  const id = req.body._id;
  await User.findOneAndUpdate({ _id: id }, { $set: { login: false } });
});

//add favorites
router.put(
  "/favorite/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { dogId, userId } = req.body;
    try {
      const favDog = await dogsModel.updateOne(
        { _id: dogId },
        { $addToSet: { liked: userId } },
        { new: true, upsert: true }
      );
      const favUser = await User.updateOne(
        { _id: userId },
        { $addToSet: { favorites: dogId } },
        { new: true, upsert: true }
      );
      res.status(200).json({ favUser: favUser, favDog: favDog });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
    console.log(req.body);
  }
);
//unfav
router.put(
  "/unfavorite",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { dogId, userId } = req.body;
    try {
      const unfavDog = await dogsModel.updateOne(
        { _id: dogId },
        { $pull: { liked: userId } },
        { new: true, upsert: true }
      );
      const unfavUser = await User.updateOne(
        { _id: userId },
        { $pull: { favorites: dogId } }
      );
      res.status(200).json({ unfavUser: unfavUser, unfavDog: unfavDog });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

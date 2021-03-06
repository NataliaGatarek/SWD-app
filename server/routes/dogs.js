const express = require("express");
const router = express.Router();
const dogsModel = require("../models/dogsModel");
const User = require("../models/usersModel");
const { check, validationResult } = require("express-validator");
const passport = require("passport"); //this is will use once the private routes are set//

//getting all the dogs for the display page
router.get("/all", (req, res) => {
  dogsModel.find({}, function (err, dogs) {
    if (err) {
      res.send(err);
    } else {
      res.send(dogs);
    }
  });
});

//getting 3 newest dogs for the home page
router.get("/newest", (req, res) => {
  dogsModel
    .find({}, function (err, dogs) {
      if (err) {
        res.send(err);
      } else {
        res.send(dogs);
      }
    })
    .sort({ _id: -1 })
    .limit(3);
});

router.post(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const {
      name,
      kennel,
      live,
      description,
      titles,
      birth,
      mname,
      fname,
      breeder,
      breedingdog,
      health,
      additional,
      contact,
      image,
      comments,
    } = req.body;
    const dog = new dogsModel({
      name: name,
      kennel: kennel,
      live: live,
      description: description,
      titles: titles,
      birth: birth,
      mname: mname,
      fname: fname,
      breeder: breeder,
      breedingdog: breedingdog,
      health: health,
      additional: additional,
      image: image,
      contact: contact,
      comments: comments,
      owner: req.user._id,
    });
    dog
      .save()
      .then((result) => {
        User.findByIdAndUpdate(
          req.user._id,
          {
            $push: { dogs: result._id },
          },
          {
            new: true,
          },
          (error, success) => {
            console.log(error, success);
            if (error) {
              res.send(error);
            } else {
              res.status(201).json({
                message: "Handling POST requests to /dog",
                createdProduct: result,
              });
            }
          }
        );
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          error: err,
        });
      });
  }
);
//getting more info for the more info page and this should be a private!///
router.get("/:id", (req, res) => {
  dogsModel
    .findOne({ _id: req.params.id }, (err, dogsModel) => {
      if (err) res.status(500).send(err);
      res.status(200).json(dogsModel);
    })
    .populate("liked", ["firstName", "lastName"]);
});

//adding comment to the dog and this should be private//
router.post(
  "/comments/:id",
  //passport.authenticate("jwt", { session: false }),
  check("text", "Text is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //access the id of the user from the body
      const user = await User.findById(req.body.userId);
      const dogsComment = await dogsModel.findById(req.params.id);
      console.log(req.body);
      console.log(user);
      const newComment = {
        text: req.body.text,
        userName: user.firstName,
        userId: user.id,
      };
      dogsComment.comments.unshift(newComment);
      await dogsComment.save();
      res.json(dogsComment.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//deliting comment and this should be private//
router.delete(
  "/comments/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const dogsComment = await dogsModel.findById(req.params.id);
      //pull out the comment
      const comment = dogsComment.comments.find(
        (comment) => comment.id === req.params.comment_id
      );
      //check if the comment exists
      if (!comment) {
        return res.status(404).json({ msg: "Comment does not exist" });
      }
      //check user
      if (comment.userId.toString() !== req.user.id) {
        return res.status(401).json({ msg: "User not authorized" });
      }
      //refering to the same object and need to convert object to a string
      dogsComment.comments = dogsComment.comments.filter(
        ({ id }) => id !== req.params.comment_id
      );
      await dogsComment.save();
      return res.json(dogsComment.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//delete dog
router.delete(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { dogId } = req.body;
    const userId = req.user._id; ///this we get from the passport//
    /* console.log(dogId);
    dogsModel.deleteOne({ _id: dogId }),
      function (err, result) {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          if (result) {
            res.send(result);
          } else {
            console.log("dog deleted");
          }
        }
      }; */
    try {
      const deleteDog = await dogsModel.deleteOne({ _id: dogId });
      console.log(deleteDog);
      await User.updateOne({ _id: userId }, { $pull: { dogs: dogId } });
      res.status(200).json({ msg: "dog deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server error" });
    }
  }
);
module.exports = router;

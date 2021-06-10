const express = require("express");
const router = express.Router();
const usersModel = require("../models/usersModel");
router.get("/test", (req, res) => {
  usersModel.find({}, function (err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

router.get("/:id", (req, res) => {
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
});

module.exports = router;

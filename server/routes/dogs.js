const express = require("express");
const router = express.Router();
const dogsModel = require("../models/dogsModel");

router.get("/all", (req, res) => {
  dogsModel.find({}, function (err, dogs) {
    if (err) {
      res.send(err);
    } else {
      res.send(dogs);
    }
  });
});

module.exports = router;

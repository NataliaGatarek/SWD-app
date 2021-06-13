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

router.post("/add", async (req, res) => {
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
  } = req.body;
  try {
    const dog = new dogsModel({
      name: req.body.name,
      kennel: req.body.kennel,
      live: req.body.live,
      description: req.body.live,
      titles: req.body.live,
      birth: req.body.birth,
      mname: req.body.mname,
      fname: req.body.fname,
      breeder: req.body.breeder,
      breedingdog: req.body.breedingdog,
      health: req.body.heatlh,
      additional: req.body.additional,
      contact: req.body.contact,
    });
    await dog.save();
    res.status(201).json({
      message: "Handling POST requests to /all",
      createdProduct: result,
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;

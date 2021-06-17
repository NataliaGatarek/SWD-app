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

/* router.post("/add", async (req, res) => {
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
  } = req.body;
  console.log(image);
  try {
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
    });
    await dog.save();
    res.status(201).json({
      message: "Success",
      createdProduct: result,
    });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}); */

router.post("/add", (req, res) => {
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
  } = req.body;
  console.log(image);
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
  });
  dog
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Handling POST requests to /dog",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    });
});

router.get("/:id", (req, res) => {
  dogsModel.findOne({ _id: req.params.id }, (err, dogsModel) => {
    if (err) res.status(500).send(err);
    res.status(200).json(dogsModel);
  });
});

module.exports = router;

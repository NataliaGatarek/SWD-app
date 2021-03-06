const mongoose = require("mongoose");
const dogsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  kennel: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  titles: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  breeder: {
    type: String,
    default: false,
    required: false,
  },
  breedingdog: {
    type: String,
    default: false,
    required: true,
  },
  health: {
    type: String,
    required: false,
  },
  additional: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  liked: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      userName: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
module.exports = mongoose.model("Dog", dogsSchema);

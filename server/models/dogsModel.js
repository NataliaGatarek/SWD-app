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
    type: Number,
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
    type: Boolean,
    default: false,
    required: false,
  },
  breedingdog: {
    type: Boolean,
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
  //what should be here?//
  /*  image: {
    type: String,
    required: true,
  }, */
  contact: {
    type: String,
    required: true,
  },
  owner: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }] },
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
      authorId: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      ],
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
module.exports = mongoose.model("Dog", dogsSchema);

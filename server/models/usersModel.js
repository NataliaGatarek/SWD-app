const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  login: Boolean,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favorites: {
    type: [],
  },
  dogs: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dog" }] },
});
module.exports = mongoose.model("User", usersSchema);

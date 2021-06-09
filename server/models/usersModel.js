const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
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
    type: String,
  },
  dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dogs" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comments" }],
});
module.exports = mongoose.model("User", usersSchema);

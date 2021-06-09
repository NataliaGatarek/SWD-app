const mongoose = require("mongoose");
const commentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  authorId: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true }],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Comment", commentsSchema);
const express = require("express");
const mongoose = require("mongoose");
const mongoURI = require("./config.js").mongoURI;
const passport = require("passport");
const { jwtStrategy } = require("./passport");

const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//connect to the db//
//mongoose//
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

app.use("/dogs", require("./routes/dogs"));
app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

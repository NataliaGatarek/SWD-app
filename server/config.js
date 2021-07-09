module.exports = {
  mongoURI: process.env.MONGO_URL,

  options: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  secretOrKey: process.env.SECRET_OR_KEY,
};

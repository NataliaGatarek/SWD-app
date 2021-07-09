 
    module.exports = {
  serverURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
    : "https://swd-app.herokuapp.com"
};
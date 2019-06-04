require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const userController = require("./controllers/userController");
const users = require("./routes/api/user");
const app = express();
// const routes = require("./routes/api/");
const passport = require("./passport/");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware =========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());

// Sessions ============================
app.use(passport.session({
  secret: "fraggle-rock",
  //store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUnitialized: false}
));

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

app.post("/user", (req, res) => {
  console.log("User Sign Up");
  // req.session.username = req.body.username;
  // res.end()
});

app.post("/api/user", userController.create);
app.post("/api/user/login", userController.login);
app.put("/api/user", userController.update);
app.get("/api/user", userController.get);


// Static Assets (usually on heroku) =========
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes ================
app.use("/api/", users);

// Connect to the Mongo DB ===
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Send every request to the React app & ==
// Define API routes before this runs =====

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

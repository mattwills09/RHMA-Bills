require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const userController = require("./controllers/userController");
const users = require("./routes/api/user");
const app = express();
const routes = require("./routes");
const passport = require("./passport/");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware =========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(passport.initalize());

// Sessions ============================
app.use(session({
  secret: 'fraggle-rock',
  //store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUnitialized: false}
));

// app.use(passport.session());

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

app.post("/api/user", userController.create);
app.put("/api/user", userController.update);
app.get("/api/user", userController.get);

// (req, res) => {
//   console.log("user signup");
//   req.session.username = req.body.username;
  // res.json(req.session.username)
// }

// Static Assets (usually on heroku) =========
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes ================
app.use("/api/users", users);

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

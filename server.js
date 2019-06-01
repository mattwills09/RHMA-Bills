require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
// const routes = require("./routes");
const passport = require("./passport");
const userController = require("./controllers/userController");
const expenseController = require("./controllers/expenseController");
const dummyData = require("./controllers/dummyDataController");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());
// ^ calls serializeUser & deserializeUser

app.use(session({secret: 'fraggle-rock',
                 resave: false,
                 saveUnitialized: false}))

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

app.post("/api/user", userController.create);

app.post("/api/expense", expenseController.create);

dummyData.create();

// (req, res) => {
//   console.log("user signup");
//   req.session.username = req.body.username;
  
  // res.json(req.session.username)
// }

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

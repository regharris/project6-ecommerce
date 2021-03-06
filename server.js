require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const usersRoutes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.set("useCreateIndex", true);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI; // connection string for Atlas here
} else {
  uri = process.env.ATLAS_URI; // connection string for localhost mongo here
}

// connection to database
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live");
});

app.use(express.static(`${__dirname}/client/build`));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
});

// app.use((req, res, next) => {
//   if (req.get("X-Forwarded-Proto") == "https" || req.hostname == "localhost") {
//     next();
//   } else if (
//     req.get("X-Forwarded-Proto") != "https" &&
//     req.get("X-Forwarded-Port") != "443"
//   ) {
//     //Redirect if not HTTP with original request URL
//     res.redirect("https://" + req.hostname + req.url);
//   }
// });

// app.use((req, res, next) => {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (
//     !req.secure &&
//     req.get("x-forwarded-proto") !== "https" &&
//     process.env.NODE_ENV === "production"
//   ) {
//     return res.redirect("https://" + req.get("host") + req.url);
//   }
//   next();
// });

app.get("/api", (req, res) => {
  res.json({ message: "API root" });
});

app.use("/api/users", usersRoutes);

app.use("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(PORT, err => {
  console.log(err || `Server running on port ${PORT}.`);
});

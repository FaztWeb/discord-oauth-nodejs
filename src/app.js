require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

require("./strategies/discordStrategy");
require("./db");

const app = express();

const PORT = process.env.PORT || 3000;
const authRoutes = require("./routes/index");
const dashboardRoutes = require("./routes/dashboard");
const { isNotAuthorized } = require("./utils/auth");

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(
  session({
    secret: "some random string",
    cookie: {
      maxAge: 60000 * 60 * 24, // 1 day
      // secure: true
    },
    saveUninitialized: false,
    resave: false,
    name: "fazt-discord-oauth2",
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/discordapp",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use((req, res, next) => {
  app.locals.user = req.user;
  next();
});

// Routes
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/", isNotAuthorized, (req, res) => res.render("home"));

app.listen(PORT);
console.log("Listening on port", PORT);

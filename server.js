const express = require("express");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("passport");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4455;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.json())

app.use(flash());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      name: "sess-cookie",
      maxAge: 1000 * 60 * 60 * 2,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// console.log(flash);
// console.log(session);

app.use(routes);

app.listen(PORT, console.log(`Listening in on port ${PORT}`));

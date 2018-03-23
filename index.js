const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3000;

const mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: true,
//     saveUninitialized: true
//   })
// );

// const auth = require("./services/auth.js");
// app.use(auth.passportInstance);
// app.use(auth.passportSession);

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

app.listen(port, () => {
  console.log("Server started on " + port);
});

const characterRouter = require("./controllers/characters.js");
app.use("/characters", characterRouter);

const categoryRouter = require("./controllers/categories.js");
app.use("/categories", categoryRouter);

// const userRouter = require("./controllers/users.js");
// app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.render("./landing");
});

app.get("/main", (req, res, next) => {
  res.render("./main");
});

app.get("/category", (req, res, next) => {
  res.render("./category");
});

app.use((err, req, res, next) => {
  console.log("Error encountered:", err);
  res.status(500);
  res.send(err);
});

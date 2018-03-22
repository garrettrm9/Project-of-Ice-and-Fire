const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mustacheExpress = require("mustache-express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});

// const userRouter = require("./controllers/users.js");
// app.use("/users", userRouter);

const categoriesRouter = require("./controllers/categories.js");
app.use("/categories", categoriesRouter);

// const charactersRouter = require("./controllers/characters.js");
// app.use("/characters", charactersRouter);

// const charactersAPIRouter = require("./controllers/api/characters.js");
// app.use("/api/characters", charactersAPIRouter);

app.get("/", (req, res, next) => {
  res.render("landing");
});

app.use((err, req, res, next) => {
  console.log("Error encountered:", err);
  res.status(500);
  res.send(err);
});

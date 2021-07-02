const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const linkRoutes = require("./routes/linkRoute");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.engine(".hbs", exphbs({ defaultLayout: "template", extname: ".hbs" }));

app.set("view engine", ".hbs");
//api
app.use("/", linkRoutes);
app.use("/api/auth", userRoutes);
app.use(express.static(path.join(__dirname, "public")));

//templates

app.listen(5000, console.log("Server is Running on 5000"));

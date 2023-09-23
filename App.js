const express = require("express");
const dotenv = require("dotenv").config();
const App = express();
const Port = 4000;
const path = require("path");
const route = express.Router();
const db = require("./Config/mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

App.use(express.json()); 
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(cookieParser());

App.use("/", require("./Routes"));

App.listen(Port, () => {
	console.log("Server is up and running on port:", Port);
});
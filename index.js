const express = require("express");
const App = express();
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();


App.get('/', (req,res) => {
    res.send("server is running");
});

App.listen(3000, () => {
    console.log("Server has started");
  });

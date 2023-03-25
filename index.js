const express = require("express");
const App = express();
const userRoutes = require ('./routes/users')
const hbs = require("hbs");
const wax = require("wax-on");
const session = require ('express-session');
var FileStore = require ('session-file-store')(session);

require("dotenv").config();

App.set('view engine', 'hbs');



App.use(
    express.urlencoded({
        extended:false
    })
);

App.use(session ({
    store:new FileStore(),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
}))


App.use((req,res,next) => {
 console.log(req.method, req.path);
 next();
}); 


//to register the userRoutes
App.use (userRoutes)

App.listen(3000, () => {
    console.log("Server has started");
  });

// use javascript in strict mode
"use strict";

// import all required modules
import express from "express";
import exphbs from "express-handlebars";
import logger from "./utils/logger.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";




// initialise project
const app = express();

// static files output to public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(cookieParser());
app.use(fileUpload({useTempFiles: true}));




const handlebars = exphbs.create({
  extname: ".hbs",
  helpers: {
    uppercase: (inputString) => {
      return inputString.toUpperCase();
    },
    timeSince: (dateString) => {
      const now = new Date();
      const date = new Date(dateString);
      const diff = now.getTime() - date.getTime();
      const mins = Math.floor(diff / 1000 / 60);
      const days = Math.floor(mins / 60 / 24);
      if (days > 0) {
        return `${days} day${days > 1 ? "s" : ""} ago`;
      } else {
        return `${mins} minute${mins > 1 ? "s" : ""} ago`;
      }
    },
    yearsSinceJoining: (joinYear) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const years = currentYear - joinYear;
    return years;
  },
  },
});

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");



// import routes file and use this for routing
import routes from "./routes.js";
app.use("/", routes);

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info("Your app is listening on port " + listener.address().port);
  
  
});

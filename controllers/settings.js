"use strict";

// import all required modules
import logger from "../utils/logger.js";
import accounts from "./accounts.js";
import userStore from "../models/user-store.js";
import { v4 as uuidv4 } from "uuid";

// create blog object
const settings = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("settings rendering");
    if (loggedInUser) {
      const viewData = {
        id: loggedInUser,
        title: "Settings",
        fullname: loggedInUser.firstName + " " + loggedInUser.lastName,
        firstName:loggedInUser.firstName,
        lastName:loggedInUser.lastName,
        email:loggedInUser.email,
        password:loggedInUser.password,
        profile: loggedInUser.profilepic,
      };
      response.render("settings", viewData);
    } else response.redirect("/settings");
  },

  
  //update the user name,email,password and ptofile 
  updateuser(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const userid = loggedInUser.id;
    logger.info("edit user name" + loggedInUser.firstName);
    logger.info("user id " + loggedInUser.id);
    const updatedUser = {
      id:loggedInUser.id,
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      profilepic: request.files.profilepic,
    };
    userStore.edituser(userid, updatedUser, function () {
      response.redirect("/login");
    });
  },
};
// export the blog module
export default settings;

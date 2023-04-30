"use strict";

// import all required modules
import logger from "../utils/logger.js";
import noteListstore from "../models/noteList-store.js";
import userstore from "../models/user-store.js";
import accounts from "./accounts.js";

// create start object
const start = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("start rendering");

    if (loggedInUser) {
      // all users
      const notelist = noteListstore.getAllNotes();
      const userlist = userstore.getAllUsers();

      let numnotelists = notelist.length;
      let numuserlist = userlist.length;
      let numnotes = 0;

      for (let item of notelist) {
        numnotes += item.notes.length;
      }

      let avgnotesofuser = numnotes / numuserlist;

      // most number of notes of any user
      let mostnumnotes = 0;
      let mostusername = "";
      let mostprofile = "";

      for (const user of userlist) {
        const mostusernotes = noteListstore.getUserNotelist(user.id);
        let test = 0;
        for (let item of mostusernotes) {
          test += item.notes.length;
        }
        if (test > mostnumnotes) {
          mostnumnotes = test;
          mostusername = user.firstName + " " + user.lastName;
          mostprofile = user.profilepic;
        }
      }

      // least number of notes of any user
      let leastnumnotes = 999;
      let leastusername = "";
      let leastprofile = "";

      for (const user of userlist) {
        const leastusernotes = noteListstore.getUserNotelist(user.id);
        let ltest = 0;
        for (let item of leastusernotes) {
          ltest += item.notes.length;
        }
        if (ltest < leastnumnotes) {
          leastnumnotes = ltest;
          leastusername = user.firstName + " " + user.lastName;
          leastprofile = user.profilepic;
        }
      }

      //------per user----------
      const notelistUser = noteListstore.getUserNotelist(loggedInUser.id);
      let numnotelistsUser = notelistUser.length;
      let numnotesUser = 0;
      //number of notes of the user
      for (let item of notelistUser) {
        numnotesUser += item.notes.length;
      }

      let useravgnumberofnotes = numnotesUser / numnotelistsUser;

      //most note return notelist name
      let usermostnoteslistname = "";
      let usermostnotes = 0;
      let usermosticonName = "";
      for (let item of notelistUser) {
        if (item.notes.length > usermostnotes) {
          usermostnotes = item.notes.length;
          usermostnoteslistname = item.title;
          usermosticonName = item.iconName;
        }
      }

      //least note return notelist name
      let userlnoteslistname = "";
      let userleastnotes = 999;
      let userliconName = "";
      for (let item of notelistUser) {
        if (item.notes.length < userleastnotes) {
          userleastnotes = item.notes.length;
          userlnoteslistname = item.title;
          userliconName = item.iconName;
        }
      }

      const viewData = {
        title: "Welcome to the Note Keeper App!",
        totalnotelist: numnotelists,
        totalnotes: numnotes,
        
        numuserlist: numuserlist,
        avgnotesofuser: avgnotesofuser,
        
        userWithMostNotes: mostusername,
        mostprofile: mostprofile,
        usermostnotes: mostnumnotes,
        
        userWithleastNotes: leastusername,
        userleastprofile: leastprofile,
        userleastNotes: leastnumnotes,

        numnotelistsUser: numnotelistsUser,
        numnotesUser: numnotesUser,
        useravgnumberofnotes: useravgnumberofnotes,
        usermostnoteslistname: usermostnoteslistname,
        usermosticonName: usermosticonName,
        userlnoteslistname: userlnoteslistname,
        userliconName: userliconName,

        fullname: loggedInUser.firstName + " " + loggedInUser.lastName,
        profile: loggedInUser.profilepic,
      };

      response.render("start", viewData);
    } else response.redirect("/");
  },
};

// export the start module
export default start;

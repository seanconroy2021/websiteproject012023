'use strict';

import logger from '../utils/logger.js';
import userStore from '../models/user-store.js';
import { v4 as uuidv4 } from 'uuid';

//create an accounts object
const accounts = {

  //index function to render index page
  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  //login function to render login page
  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  //logout function to render logout page
  logout(request, response) {
    response.cookie('noteList', '');
    response.redirect('/');
  },

 //signup function to render signup page
  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  
register(request, response) {
  const user = request.body;
  user.id = uuidv4();
  user.profilepic = request.files.profilepic;

  logger.debug("Creating a new user" + user);
  userStore.addUser(user, function() {
    response.cookie('noteList', user.email); // allow the user auto login 
    response.redirect("/start");
  });
},


  //authenticate function to check user credentials and either render the login page again or the start page.
  authenticate(request, response) {
    const user = userStore.getUserByEmail(request.body.email);
    if (user && user.password == request.body.password ) { // this make (user.password == request.body.password) make sure user == the password stored.
      response.cookie('noteList', user.email);
      logger.info('logging in' + user.email);
      response.redirect('/start');
    } else {
      response.redirect('/login');
    }
  },
  


 //utility function getCurrentUser to check who is currently logged in
  getCurrentUser (request) {
    const userEmail = request.cookies.noteList;
    return userStore.getUserByEmail(userEmail);
  }
}

export default accounts;

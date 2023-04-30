'use strict';

// import all required modules
import logger from '../utils/logger.js';
import teamListStore from '../models/teamList-store.js';
import accounts from './accounts.js';


// create about object
const about = {
  
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'About the Note Keeper',
        team: teamListStore.getAllTeam(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        profile: loggedInUser.profilepic
      };
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },

  
};

// export the about module
export default about;
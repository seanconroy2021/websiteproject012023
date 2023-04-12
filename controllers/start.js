'use strict';

// import all required modules
import logger from '../utils/logger.js';
import noteListstore from '../models/noteList-store.js';
import accounts from './accounts.js';


// create start object
const start = {
  
  index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if(loggedInUser){

     const notelist = noteListstore.getAllNotes();
      let numnotelists = notelist.length;
      let numnotes = 0;
    for (let item of notelist) {
     numnotes += item.notes.length;
    }

      const viewData = {
        title: 'Welcome to the Note Keeper App!',
        totalnotelist: numnotelists,
        totalnotes: numnotes,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        profile: loggedInUser.profilepic
      };

      response.render('start', viewData);
    }
    else response.redirect('/error');
  },

  
};

// export the start module
export default start;
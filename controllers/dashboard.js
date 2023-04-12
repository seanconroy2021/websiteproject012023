'use strict';

// import all required modules
import logger from '../utils/logger.js';
import noteListstore from '../models/noteList-store.js';
import { v4 as uuidv4 } from 'uuid';
import accounts from './accounts.js';



// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
    index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Note Keeper Dashboard',
      noteList: noteListstore.getUserNotelist(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };
    logger.info('about to render' + viewData.noteList);
    response.render('dashboard', viewData);
    }
    else response.redirect('/about');
  },

    deleteNoteCollection(request, response) {
    const notelistId = request.params.id;
    logger.debug(`Deleting note list collection  ${notelistId}`);
    noteListstore.removeNoteCollection(notelistId);
    response.redirect('/dashboard');
  },
    addnotecollection(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newnotecollection = {
      id: uuidv4(),
      userid: loggedInUser.id,
      title: request.body.title,
      catergory: request.body.catergory,
      priorty: request.body.priorty,
      description: request.body.description,
      iconName: request.body.iconName,
      notes: [],
    };
    logger.debug('Creating a new NoteList' + newnotecollection);
    noteListstore.addnotecollection(newnotecollection);
    response.redirect('/dashboard');
  },

   
};

// noteList == to the playlist
// noteID == eqaul to a song 

// export the dashboard module
export default dashboard;
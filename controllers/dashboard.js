'use strict';

// import all required modules
import logger from '../utils/logger.js';
import noteListstore from '../models/noteList-store.js';
import { v4 as uuidv4 } from 'uuid';


// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Dashboard',
      noteList: noteListstore.getAllNotes(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.noteList);
    response.render('dashboard', viewData);
  },
    deleteNoteCollection(request, response) {
    const notelistId = request.params.id;
    logger.debug(`Deleting note list collection  ${notelistId}`);
    noteListstore.removeNoteCollection(notelistId);
    response.redirect('/dashboard');
  },
    addnotecollection(request, response) {
    const newnotecollection = {
      id: uuidv4(),
      title: request.body.title,
      catergory: request.body.catergory,
      priorty: request.body.priorty,
      description: request.body.description,
      iconName: request.body.iconName,
      notes: [],
    };
    noteListstore.addnotecollection(newnotecollection);
    response.redirect('/dashboard');
  },

};

// noteList == to the playlist
// noteID == eqaul to a song 

// export the dashboard module
export default dashboard;
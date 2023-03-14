'use strict';

// import all required modules
import logger from '../utils/logger.js';
import noteListstore from '../models/noteList-store.js';

const notelist = {
  index(request, response) {
    const notelistid = request.params.id;
    logger.debug('Note List id = ' + notelistid);
    const viewData = {
      title: 'Notelist',
      notelist: noteListstore.getnotelistid(notelistid)
    };
    response.render('noteList', viewData);
  },
  
    deleteNote(request, response) {
    const notelistId = request.params.id;
    const noteId = request.params.noteid;
    logger.debug(`Deleting Song ${noteId} from Playlist ${notelistId}`);
    noteListstore.removeNote(notelistId, noteId);
    response.redirect('/notelist/' + noteId);
  },
};

export default notelist;

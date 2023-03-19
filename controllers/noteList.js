'use strict';

// import all required modules
import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
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
    logger.debug(`Deleting Song ${noteId} from notelist ${notelistId}`);
    noteListstore.removeNote(notelistId, noteId);
    response.redirect('/noteList/' + notelistId); 
  },
   addnote(request, response) {
    const notelistId = request.params.id;
    const notelist = noteListstore.getnotelistid(notelistId);
    const newnote = {
      id: uuidv4(),
      title: request.body.title,
      dueDate: request.body.dueDate,
      note:request.body.note,
    };
    noteListstore.addnote(notelistId, newnote);
    response.redirect('/noteList/' + notelistId);
  },
};




// noteList == to the playlist
// noteID == eqaul to a song 

export default notelist;

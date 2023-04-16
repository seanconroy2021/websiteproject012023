'use strict';

// import all required modules
import logger from '../utils/logger.js';
import { v4 as uuidv4 } from 'uuid';
import noteListstore from '../models/noteList-store.js';
import accounts from './accounts.js';


const notelist = {
  index(request, response) {
    const notelistid = request.params.id;
    const loggedInUser = accounts.getCurrentUser(request);
    logger.debug('Note List id = ' + notelistid);
    const viewData = {
      title: 'Notelist',
      notelist: noteListstore.getnotelistid(notelistid),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      profile: loggedInUser.profilepic,
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
      image:request.files.image
    };
    logger.debug("Creating a new Note..." + newnote);
      noteListstore.addnote(notelistId,newnote, function() {
       response.redirect('/noteList/' + notelistId);;
      });
  },
  
  // new stuff
  
    updatenote(request, response) {
    const notelistId = request.params.id;
    const noteId = request.params.noteid;
    logger.debug("updating note " + noteId);
    const updatednote = {
      id: noteId,
      title: request.body.title,
      dueDate: request.body.dueDate,
      note: request.body.note,
    };
    noteListstore.editnote(notelistId, noteId, updatednote);
    response.redirect('/noteList/' + notelistId);
  }

};




// noteList == to the playlist
// noteID == eqaul to a song 

export default notelist;

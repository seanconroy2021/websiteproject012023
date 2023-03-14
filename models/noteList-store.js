'use strict';

import _ from 'lodash';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const noteList = require("./noteList-store.json");
            
const noteListStore = {

  // import the playlist collection object
  noteList: noteList.noteList,

  // function to get all of the playlists
  getAllNotes() {
    return this.noteList;
  },
    getnotelistid(id) {
    return _.find(this.noteList, { id: id });
  },
  
    removeNote(id, noteId) {
    const noteList = this.getnotelistid(id);
    _.remove(noteList.notes, { id: noteId });
  },

  


};
        
// export the playlistStore object so it can be used elsewhere
export default noteListStore;
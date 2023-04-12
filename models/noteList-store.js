import _ from "lodash";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const noteList = require("./noteList-store.json");
import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";

const noteListStore = {
  store: new JsonStore("./models/noteList-store.json", { noteList: [] }),
  collection: "noteList",

  // import the NoteKeeper collection object
  noteList: noteList.noteList,

  // function to get all of the NoteKeeper
  getAllNotes() {
    return this.store.findAll(this.collection);
  },
  getnotelistid(id) {
    return this.store.findOneBy(
      this.collection,
      (collection) => collection.id === id
    );
  },

  removeNote(id, noteId) {
    const arrayName = "notes";
    this.store.removeItem(this.collection, id, arrayName, noteId);
  },

  removeNoteCollection(id) {
    const noteListCollection = this.getnotelistid(id);
    this.store.removeCollection(this.collection, noteListCollection);
  },

  addnote(id, note) {
    const noteList = this.getnotelistid(id);
    noteList.notes.push(note);
  },
  addnotecollection(notelistcollection) {
    this.store.addCollection(this.collection, notelistcollection);
  },
  
  //new stuff
    editnote(id, noteid, updatednote) {
    const arrayName = "notes";
    this.store.editItem(this.collection, id, noteid, arrayName, updatednote);
  },
    
  getUserNotelist(userid) {
    return this.store.findBy(this.collection, (noteList => noteList.userid === userid));
  },


  
};

// export the NoteKeeperStore object so it can be used elsewhere
export default noteListStore;


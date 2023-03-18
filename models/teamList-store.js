'use strict';

import JsonStore from './json-store.js';
            
const teamListStore = {

  store: new JsonStore('./models/teamList-store.json', { teamList: [] }),
  collection: 'teamList',

  getAllTeam() {
    return this.store.findAll(this.collection);
  },

};

export default teamListStore;
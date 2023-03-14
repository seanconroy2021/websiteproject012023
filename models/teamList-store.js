'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const teamList = require("./teamList-store.json");
            
const teamListStore = {

  // import the playlist collection object
  teamList: teamList.teamList,

  // function to get all of the playlists
  getAllTeam() {
    return this.teamList;
  },

};

// export the developerStore object so it can be used elsewhere
export default teamListStore;
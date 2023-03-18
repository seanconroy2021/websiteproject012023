'use strict';

import JsonStore from './json-store.js';
            
const blogPostStore = {

  store: new JsonStore('./models/blogPost-store.json', { blogCollection: [] }),
  collection: 'blogCollection',

  getAllBlogPosts() {
    return this.store.findAll(this.collection);
  },

};

export default blogPostStore;
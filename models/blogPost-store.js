'use strict';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const blogCollection = require("./blogPost-store.json");

const blogPostStore = {

  // import the blog collection object
  blogCollection: blogCollection.blogCollection,

  // function to get all of the blogcollection
  getAllBlogPosts() {
    return this.blogCollection;
  },

};

// export the blogstore object so it can be used elsewhere
export default blogPostStore;

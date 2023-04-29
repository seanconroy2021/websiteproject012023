"use strict";
import _ from "lodash";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const blogList = require("./blogPost-store.json");
import logger from "../utils/logger.js";
import JsonStore from "./json-store.js";


const blogPostStore = {
  store: new JsonStore("./models/blogPost-store.json", { blogCollection: [] }),
  collection: "blogCollection",

  // import the blogpost collection object
  blogList: blogList.blogList,

  getAllBlogPosts() {
    return this.store.findAll(this.collection);
  },

  getblogpostId(id) {
    return this.store.findOneBy(
      this.collection,
      (collection) => collection.id === id
    );
  },

 addcomment(id, comment) {
     const arrayName = "comments";
    const blogpost = this.getblogpostId(id);
    this.store.addItem(this.collection, id, arrayName, comment);
  }
  
 

 
};

export default blogPostStore;
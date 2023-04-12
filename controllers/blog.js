'use strict';

// import all required modules
import logger from '../utils/logger.js';
import blogPostStore from '../models/blogPost-store.js';
import accounts from './accounts.js';


// create blog object
const blog = {
   index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('blog rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'Blog',
        bloglists: blogPostStore.getAllBlogPosts(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      };
      response.render('blog', viewData);
    }
    else response.redirect('/');    
  },
 

};

// export the blog module
export default blog;
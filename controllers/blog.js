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
        id: request.params.id,
        title: 'Blog',
        bloglists: blogPostStore.getAllBlogPosts(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        profile: loggedInUser.profilepic
      };
      response.render('blog', viewData);
    }
    else response.redirect('/');    
  },
  
 addcomment(request, response) {
    const blogpostId = request.params.id;
    logger.debug('blog id is : '+ blogpostId);
    const blogpost = blogPostStore.getblogpostId(blogpostId);
   logger.debug('the blogpsot is '+blogpost);
    const newcomment = {
  comment:request.body.comment
    };
    blogPostStore.addcomment(blogpostId, newcomment);
    response.redirect('/blog/');
  },

};

// export the blog module
export default blog;

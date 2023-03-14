'use strict';

// import all required modules
import logger from '../utils/logger.js';

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('start rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Welcome to the Note Keeper App!',
    };
    
    // render the start view and pass through the data
    response.render('start', viewData);
  },
};

// export the start module
export default start;
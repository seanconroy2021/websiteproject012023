'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

// import controllers
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';
import blog from './controllers/blog.js';
import notelist from './controllers/noteList.js';

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/blog', blog.index);
router.get('/notelist/:id', notelist.index);
router.get('/notelist/:id/deletenote/:noteid', notelist.deleteNote);


// export router module
export default router;
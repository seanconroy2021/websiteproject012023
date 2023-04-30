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
import accounts from './controllers/accounts.js';
import settings from './controllers/settings.js';

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);


// connect routes to controllers
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/settings', settings.index);
router.get('/about', about.index);
router.get('/blog', blog.index);
router.get('/notelist/:id', notelist.index);
router.get('/notelist/:id/deletenote/:noteid', notelist.deleteNote);
router.get('/dashboard/deleteNoteCollection/:id', dashboard.deleteNoteCollection);
router.post('/notelist/:id/addnote', notelist.addnote);
router.post('/dashboard/addnotecollection', dashboard.addnotecollection);
router.post('/notelist/:id/updatenote/:noteid', notelist.updatenote);
router.post('/blogpost/:id/addcomment', blog.addcomment);
router.post('/settings/:id', settings.updateuser);








// export router module
export default router;
'use strict';


const {Router} = require('express');
const {createPerson,pagePerson,getUsers} = require('../controllers/user.controllers');

// Initializations
const router = Router();


// User routes
router.get('/person', pagePerson);
router.post('/person', createPerson);
router.get('/person/allusers', getUsers);

module.exports = router;
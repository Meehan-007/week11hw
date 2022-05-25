const router = require('express').Router();
const notes = require('../apiroutes/notes'); 

router.use(notes);


module.exports = router;
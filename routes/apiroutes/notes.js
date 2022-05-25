const router = require("express").Router(); 
const { findById, createNotes, validateNotes } = require("../../lib/notes");
var data = require("../../data/db")


// router get notes 
router.get('/data', (req, res) => { 
    let results = data;  
    console.log(results);
    if(req.body) { 
    res.json(results); }
});


// router get by id 
router.get('/data/:id', (req, res) => { 
    const result = findById(req.params.id, db);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    } 
})


// router post for new notes 

router.post('/data', (req, res) => {
    req.body.id = data.length.toString();   

    if (!validateNotes(req.body)) { 
        res.status(400).send("The notes are not properly formatted.");
    } else { 
    const notes = createNotes(req.body, data); 
    res.json(data); 
    } 
}) 

module.exports = router;
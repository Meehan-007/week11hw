const fs = require('fs');
const path = require('path'); 

module.exports = {
    findById, 
    createNotes, 
    validateNotes
  }; 

  function findById(id, dbarray ) { 
      const results = dbarray.filter(data => data.id === id)[0]; 
      return results;
  }; 

  function createNotes(body, dbarray) {
      const notes = body; 
      dbarray.push(notes); 
      fs.writeFileSync( 
          path.join(__dirname, '../data/db.json'), 
          JSON.stringify({data: dbarray}, null, 2)
      ); 
      return notes; 
  }; 

  function validateNotes(notes) { 
    if (!notes.title || typeof notes.title !== 'string') {
        return false;
      }
      if (!notes.text || typeof notes.text !== 'string') {
        return false;
      } 
    return true; 
  }
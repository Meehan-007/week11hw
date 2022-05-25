const express = require('express'); 
var db =  require("./data/db"); 

const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes'); 


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static('public')); 

// Use apiRoutes
app.use('/api', apiroutes);
app.use('/', htmlroutes);


app.listen(PORT, () => {
  console.log(PORT); 
  console.log(db);
});
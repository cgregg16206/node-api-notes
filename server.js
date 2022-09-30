const express = require("express"); 
const bodyParser = require("body-parser"); 

const app = express(); 

const PORT = 8000; 

app.use(bodyParser.urlencoded({ extended: true })); 

require("./app/routes")(app, {}); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
})
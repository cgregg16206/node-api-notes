const express = require("express"); 
const MongoClient = require("mongodb").MongoClient; 
const bodyParser = require("body-parser"); 
const db = require("./config/db")

const app = express(); 

const PORT = 8000; 

app.use(bodyParser.urlencoded({ extended: true })); 

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  // Make sure you add the database name and not the collection name
  const db1 = database.db("Cluster0")

  require('./app/routes')(app, db1);

// require("./app/routes")(app, {}); 

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
  }); 

})
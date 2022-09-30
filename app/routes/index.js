const noteRouter = require("./note_routes"); 

module.exports = function(app, db) {
  noteRouter(app, db); 
}; 
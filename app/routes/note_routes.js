module.exports = function(app, db) {
  // GET 
  app.get("/", (req, res) => {
    res.send("Hello from GET route")
  })

  // POST 
  app.post("/notes", (req, res) => {
    console.log(req.body); 
    res.send("Hello");
  })
}; 
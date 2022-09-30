module.exports = function(app, db) {

  const collection = 
    app.post("/notes", (req, res) => {
      const note = { title: req.body.title, text: req.body.text };
      db.collection("notes").insert(note, (err, result) => {
        if (err) { 
          res.send({ "error": "An error has occurred" }); 
        } else {
          res.send(result.insertedIds["0"]);
        }
      });
    });
}; 
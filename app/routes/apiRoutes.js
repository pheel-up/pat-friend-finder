var friendData = require("../data/friends");

console.log(friendData);

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
    });
};
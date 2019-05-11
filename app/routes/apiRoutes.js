var path = require('path');
var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    console.log("running friends get");
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log("running friends post");
    var newFriend = req.body;

    friends.push(newFriend);

    res.json(newFriend);
  });
};

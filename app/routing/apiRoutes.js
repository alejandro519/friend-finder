var friendData = require("../data/friends.js");

module.exports = function (app){
    
    //API Friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routeName = newFriend.
        res.json(friendData);
    });

}


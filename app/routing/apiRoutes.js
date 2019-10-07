var friendData = require("../data/friends.js");

module.exports = function (app){
    
    //API Friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    
}


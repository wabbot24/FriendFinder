var friendsData = require("../data/friends");

module.exports = function (app) {

    //get request for friends table data
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // post to friends table data
    app.post("/api/friends", function (req, res) {

        friendsData.push(req.body);
        res.json(true);


        // combatibility logic goes here

        console.log(req.body);
        console.log(res);

    });
}
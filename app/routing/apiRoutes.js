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

        //obviously I didn't have time to code the compatibility logic, but here's my pseudocode:

        //use a for loop to iterate through friendsArray
        //create an Array outside of for loop to take in compatibility values
        //for each friend object, loop through scores array and find absolute value of difference from user score. Add to local variable compatibilityScore
        //after finishing this inner loop, push compatibilityScore to compatibilityArray
        //after both for loops have finished and each existing friend has a corresponding score in the compatibilityArray, compare those scores, lowest one is friend Match

    });
}
const express = require("express");

const router = express.Router();

// import the model
let burger = require("../models/burger.js");

// display all the burgers from the database
router.get("/", function(request, result) {
    burger.all(function(data) {
        let hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        result.render("index", hbsObject);
    })
})
router.post("/api/burgers", function(request, response) {
    console.log(request.body);
})

module.exports = router;
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
// add a new burger
router.post("/api/burgers", function(request, response) {
    console.log(request.body);
    burger.create(["burger_name"], [request.body.name], function(result) {
        response.json({ id: result.insertId });
    })
})

// update eat state of burger
router.put("/api/burgers/:id", function(request, response) {
    let condition = `id = ${request.params.id}`;
    console.log("condition", condition);
    burger.update({
        devoured: request.body.devoured
    })
})

module.exports = router;
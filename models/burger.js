// Import the ORM
const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all("burgers", function(result) {
            cb(result);
        })
    },
    // create a new burger
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(response) {
            cb(response);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    }
};

// export
module.exports = burger;
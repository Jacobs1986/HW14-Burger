// Import the ORM
const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all("burgers", function(result) {
            cb(result);
        })
    }
};

// export
module.exports = burger;
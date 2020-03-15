// Import MySQL connection
const connection = require("../config/connection.js");

// Object for all our SQL 
let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}

module.exports = orm;
const mysql = require("mysql");
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Mooninite_23',
    database : 'burgers_db'
  });
  // Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  
const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'hotelbidding'
});

connection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// connection.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all remaining queries are executed
//   // Then sends a quit packet to the MySQL server.
// });
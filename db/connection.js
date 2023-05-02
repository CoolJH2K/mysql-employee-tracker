// Link used for reference: https://www.w3schools.com/nodejs/nodejs_mysql.asp
const mysql = require("mysql2");

const connectDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employees"
})

module.exports = connectDb;
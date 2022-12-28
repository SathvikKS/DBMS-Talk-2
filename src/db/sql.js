const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    user: "root",
    password:process.env.dbpass,
    host: "localhost",
    database: "talk"
})

connection.connect((err)=>{
    if (err) {
        console.log('Error')
        console.log(err)
    } else {
        console.log("Connection established")
    }
})

module.exports = {connection, mysql}
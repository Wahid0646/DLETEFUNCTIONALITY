const mysql = require('mysql2');
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'node',
    password: 'nodecomplete'
})
module.exports= pool.promise();
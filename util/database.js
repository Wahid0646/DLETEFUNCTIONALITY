const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'Wahid@0646'
});

module.exports = {
    execute: (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.execute(sql, values, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

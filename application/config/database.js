const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'photoapp',
    password: 'Csc3170102!',
    database: 'csc317db',
});

const promisePool = pool.promise();

module.exports = promisePool;
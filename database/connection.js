const Pool = require('pg').Pool;

const connection = new  Pool({
    user : 'postgres' ,
    password : 'thomasino' ,
    database : 'postgres',
    host     : 'localhost',
    port     : '5432'
}) ;

module.exports = connection ;   
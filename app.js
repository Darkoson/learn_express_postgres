const express = require('express');
const app = express();

const connection = require('./database/connection');



app.use(express.json());



app.get('/', (req, res) => {
    res.json(' our endpoints are free  ........... ');

})

/**
 * posting a new student
 */

app.post('/students', async (req, res) => {

    try {
        const user = req.body;
        console.log(user);

        const student = await connection.query(
            ' insert into students (firstname , lastname, age)' +
            ' values ($1 , $2 , $3) returning * ', [user.firstname, user.lastname, user.age]);

        res.json(user);

    } catch (error) {
        res.json(error.message)
    }

})

/**
 * 
 * Finding a student by id
 */

app.get('/students/:id' , async (req , res)=>{

    try {
        const {id} = req.params ;
        const result = await connection.query('select * from students where id = $1', [id]) ;
        console.log(result);
        res.json(result.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

});


const port = process.env.port || 3001;
app.listen(port, () => { console.log(` server started on port ${port} ...`); })


const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
const PORT = 3001;

// Create a connection to the database
const db = mysql.createConnection({
    host: '192.168.0.150',
    user: 'fatec',
    password: '11',
    database: "exemplo"
});

app.use(cors());
app.use(express.json());

app.post('/create', (req,res) => {
    const { first_name, last_name, email, phone, password } = req.body
    let query = 'INSERT INTO usuarios ( first_name, last_name, email, phone, password ) VALUES ( ?, ?, ?, ?, ? )';
    db.query(query,[first_name,last_name,email,phone,password],(err, result) => {
        console.log(err)
    })
})

app.get('/viewuser', (req,res) => {
    let query = 'SELECT * FROM usuarios'
    db.query(query,(err,result) => {
        err ? console.log(err) : res.send(result)
    })
})

app.put('/update', (req,res) => {
    const {id, first_name, last_name, email, phone, password } = req.body;
    let query = 'UPDATE usuarios SET first_name = ?, last_name = ?, email = ?, phone = ?, password = ? where id = ?';

    db.query(query, [first_name,last_name,email,phone,password,id], (err, result) => {
        err? console.log(err) : res.send(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    let query = 'DELETE FROM usuarios WHERE id = ?';

    db.query(query, [id], (err,result) =>{
        err ? console.log(err) : res.send(result)
    })
})

db.connect(error => {
    if (error){
        console.log("A error has been occured "
            + "while connecting to database.");        
        throw error;
    }

//If Everything goes correct, Then start Express Server
app.listen(PORT, () => {
    console.log("Server is Listening on Port ", PORT);
})
})
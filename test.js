const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const { pool } = require('./d_server')

const PORT = 3000;
const app = express();
 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('templates'));


app.get('/', async (req, res) =>{
    res.sendFile('index.html');
});


app.get('/api/branches/autocomplete',async (req, res) => {
    let {q , limit , offset} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    const { rows } = await pool.query(
        'SELECT  branches.ifsc, branches.bank_id, branches.branch, branches.address, branches.city, branches.district, branches.state FROM branches WHERE branches.branch LIKE $1 ORDER BY branches.ifsc ASC LIMIT $2 OFFSET $3 ',
['%'+q+'%', limit, offset]);
    

    res.send(rows);
 });


app.get('/api/branches',async (req, res) => {
    let {q , limit , offset} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    const { rows } = await pool.query(
        'SELECT  branches.ifsc, branches.bank_id, branches.branch, branches.address, branches.city, branches.district, branches.state FROM branches WHERE CONCAT_WS(ifsc,bank_id,branch,address,city,district,state) LIKE $1 ORDER BY branches.ifsc ASC LIMIT $2 OFFSET $3 ',
['%'+q+'%', limit, offset]);
    
    
    res.send(rows);
 });



app.listen( process.env.PORT || 3000, function(){
  console.log("Starting Server on port %d in %s mode", this.address().port,app.settings.env);
});



const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

const con = mysql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    port: '3306',
    user: 'b707183cdd8e88',
    password: '5fac8f44',
    database: 'heroku_4209a3f1c2ba81c'
});

const server = app.listen(4545, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('hello');
});

con.connect((error)=>{
    if(error) console.log(error);
    else console.log('conectado!');
});


app.get('/aluno',(req, res)=>{
    con.query('SELECT * FROM aluno',(error, rows, fields)=>{
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.post('/aluno', (req, res) => {
    const data = req.body;
    //var sql = "INSERT INTO aluno (RA, Nome_Aluno, Sobrenome_Aluno, CPF, Status_Aluno, Cod_Turma, Sexo, Cod_Curso, Nome_Pai, Nome_Mae, Email, Whatsapp) values(?,?,?,?,?,?,?,?,?,?,?,?)";
    con.query("INSERT INTO aluno SET ?", [data], (error, rows) => {
        if(!!error) console.log(error);
        else{
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
});

app.get('/aluno/:id', (req, res) => {
    console.log(req.params.id);
    con.query('SELECT * FROM aluno WHERE nota_id = ?', req.params.id, (error, rows, fields) => {
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(JSON.stringify(rows));
        }
    })
});

app.delete('/aluno/:id', (req, res) => {
    console.log(req.params.id);
    con.query('DELETE FROM aluno WHERE Status_Aluno = ?', req.params.id, (error, rows, fields) => {
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.end('Anotação apagada com sucesso!');
        }
    })
});

app.put('/aluno', (req, res) => {
    con.query('UPDATE aluno SET titulo = ?, descricao = ? WHERE nota_id = ?',
    [req.body.titulo, req.body.descricao, req.body.nota_id], (error, rows, fields) => {
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.end(JSON.stringify(rows));
        }
    })
});
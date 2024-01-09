/*require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    }
];

    app.get('/books',(req,res) =>{
        res.json(books);
    });

    app.get('/books/:id',(req,res) =>{
         const book = books.find(b => b.id === parseInt (req.params.id));
         if (!book) res.status(404).send('Book not found');
         res.json(book);

    });

    app.post('/books',(req,res) =>{
        const book = {
            id: books.length + 1,
            title: req.body.title,
            author: req.body.author
        }
        books.push(book);
        res.send(book);
    });

    app.put('/books/:id',(req,res) => {
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) res.status(404).send('Book not found');
        book.title = req.body.title;
        book.author = req.body.author;
        res.send(book);
    });

    app.delete('/books/:id',(req,res) => {
        const book = books.find(b => b.id === parseInt(req.params.id));
        if (!book) res.status(404).send('Book not found');
        const index = books.indexOf(book);
        books.splice(index,1);
        res.send(book);
    });

    const port = process.env.PORT 
    app.listen(port, () => console.log (console.log(`Expamp app listening at http://localhost:${port}`)));

*/ 

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

//connect to Database
const db = new sqlite3.Database('./Database/Book.sqlite');


app.use(express.json());


db.run(`CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT
)`);

app.get('/books',(req,res) => {
    db.all('SELECT * FROM books ',(err,row) => {
        if (err){
            res.status(500).send(err);
        }else{
            res.json(row);
        }
    });
});

app.get('/books/:id',(req,res) => {
    db.get('SELECT * FROM books WERE id = ? ',req.params.id, (err,row) => {
        if (err){
            res.status(500).send(err);
        }else{
            if(!row){
                res.status(404).send('Book not found');
            }else{
                res.json(row);
            }
        }
    });
});

app.post('/books',(req,res) => {
    const book = req.body;
    db.run('INSERT INTO books (title,author) VALUES (?,?)',book.title , book.author,function(err){
        if(err){
            res.status(500).send(err);
        }else{
            book.id = this.lastID;
            res.send(book);
        }
    });
});

app.put('/books/:id',(req,res) => {
    const book = req.body;
    db.run('UPDATE books SET title = ?,author = ? WHERE id = ?',book.title , book.author,req.params.id,function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(book);
        }
    });
});
    
app.delete('/books/:id',(req,res) => {
    db.run('Delete FROM books WHERE id = ?',req.params,function(err){
        if(err){
            res.status(500).send(err);
        }else{
            res.send({});
        }
    });
});
    
const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Expamp app listening at http://localhost:${port}`));
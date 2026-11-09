const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'spendy',
});

app.post('/add_expense', (req, res) => {
    const values = [
        req.body.expenseName,
        req.body.expenseAmount,
        req.body.expenseDate
    ];

    const sql = 'INSERT INTO Expenses (expenseName, expenseAmount, expenseDate) VALUES (?, ?, ?)';
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding expense');
        } else {
            res.status(200).send('Expense added successfully');
        }
    });
});

app.get('/getexpenses', (req, res) => {
    const sql = 'SELECT * FROM Expenses';
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error fetching expenses" });
        } else {
            return res.json(result);
        }
    });
});

app.get('/getexpense/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM Expenses WHERE expenseID = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error fetching expense" });
        } else {
            return res.json(result[0]);
        }
    });
});

app.get('/getincome/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM Incomes WHERE incomeID = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error fetching income" });
        } else {
            return res.json(result[0]);
        }
    });
});

app.post('/editincome/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'UPDATE Incomes SET incomeAmount = ? WHERE incomeID = ?';
    const values = [req.body.incomeAmount, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error updating income" });
        } else {
            return res.json(result[0]);
        }
    });
});

app.post('/editexpense/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'UPDATE Expenses SET expenseName = ?, expenseAmount = ?, expenseDate = ? WHERE expenseID = ?';
    const values = [req.body.expenseName, req.body.expenseAmount, req.body.expenseDate, id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error updating expense" });
        } else {
            return res.json(result[0]);
        }
    });
});

app.delete('/deleteexpense/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM Expenses WHERE expenseID = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ "message": "Error deleting expense" });
        } else {
            return res.json(result[0]);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
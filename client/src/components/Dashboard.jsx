import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'




function Dashboard() {
    const [data, setData] = React.useState(null);
    const [incomeData, setIncomeData] = React.useState(null);
    const [deleted, setDeleted] = useState(true);
    const [sortBy, setSortBy] = useState('date');
    const [selectedMonth, setSelectedMonth] = useState(() => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    });

    useEffect(() => {
        if(deleted){
            setDeleted(false)
        }
        axios.get('/getexpenses')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => console.log(err))
    }, [deleted])

    useEffect(() => {
        axios.get('/getincome/1') // Replace '1' with the actual income ID you want to fetch
        .then((res) => {
            setIncomeData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    function handleDelete(id) {
        if (!window.confirm('Are you sure you want to delete this expense? This action cannot be undone.')) {
            return;
        }

        axios.delete(`/deleteexpense/${id}`)
        .then((res) => {
            setData((currentData) => currentData.filter((expense) => expense.expenseID !== id))
        })
        .catch((err) => {
            console.error('Error deleting expense:', err);
            window.alert(err.response?.data?.message || 'Unable to delete expense. Please try again.');
        })
    }

    function formatExpenseDate(value) {
        const [year, month, day] = value.slice(0, 10).split('-');
        return `${month}-${day}-${year}`;
    }

    const monthOptions = Array.from({ length: 12 }, (_, index) => {
        const date = new Date();
        date.setDate(1);
        date.setMonth(date.getMonth() - index);
        const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        return {
            value,
            label: date.toLocaleString(undefined, { month: 'long', year: 'numeric' }),
        };
    });

    const monthlyExpenses = data
        ? data.filter((expense) => expense.expenseDate.slice(0, 7) === selectedMonth)
        : [];

    const sortedExpenses = [...monthlyExpenses].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.expenseName.localeCompare(b.expenseName);
            case 'amount':
                return Number(a.expenseAmount) - Number(b.expenseAmount);
            case 'date':
                return a.expenseDate.slice(0, 10).localeCompare(b.expenseDate.slice(0, 10));
            default:
                return 0;
        }
    });

    const totalExpenses = monthlyExpenses.reduce(
        (sum, expense) => sum + Number(expense.expenseAmount),
        0
    );

  return (
    <>
    <Navbar />
    <div className="container min-vh-100 d-flex flex-column align-items-center pt-4">
        <h1>Dashboard</h1>
        <div className="container">
            <div className="row gs-3">
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Monthly Expenses</h2>
                        {data && (
                            <p>${totalExpenses.toFixed(2)}</p>
                        )}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Monthly Income</h2>
                        {incomeData && (
                            <p>${parseFloat(incomeData.incomeAmount).toFixed(2)}</p>
                        )}
                        {incomeData && (
                            <Link to={`/editincome/${incomeData.incomeID}`} className="btn btn-warning">Edit Income</Link>
                        )}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Remaining Balance</h2>
                        {incomeData && data && (
                            <p>${(Number(incomeData.incomeAmount) - totalExpenses).toFixed(2)}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <h2 className="mt-4">Expenses</h2>
        <div className="mb-3 d-flex align-items-center gap-2">
            <Link to="/addexpense" className="btn btn-success">Add Expense</Link>
            <label htmlFor="expense-month" className="mb-0">Month</label>
            <select
                id="expense-month"
                className="form-select w-auto"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
            >
                {monthOptions.map((month) => (
                    <option key={month.value} value={month.value}>{month.label}</option>
                ))}
            </select>
            <label htmlFor="expense-sort" className="mb-0">Sort by</label>
            <select
                id="expense-sort"
                className="form-select w-auto"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="date">Date</option>
                <option value="name">Name</option>
                <option value="amount">Amount</option>
            </select>
        </div>
        <table className="table table-bordered w-100 text-center expense-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {sortedExpenses.map((expense) => (
                    <tr key={expense.expenseID}>
                        <td>{expense.expenseName}</td>
                        <td>${parseFloat(expense.expenseAmount).toFixed(2)}</td>
                        <td>{formatExpenseDate(expense.expenseDate)}</td>
                        <td>
                            <Link to={`/editexpense/${expense.expenseID}`} className="btn btn-warning">Edit</Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(expense.expenseID)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Dashboard
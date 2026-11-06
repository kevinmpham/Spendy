import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Dashboard() {
    const [data, setData] = React.useState(null);
    const [incomeData, setIncomeData] = React.useState(null);
    const [deleted, setDeleted] = useState(true);

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
            setData(data.filter((expense) => expense.id !== id))
        })
        .catch((err) => console.log(err))
    }

  return (
    <>
    <Navbar />
    <div className="container min-vh-100 d-flex flex-column align-items-center pt-4">
        <h1>Dashboard</h1>
        <div className="container">
            <div className="row g-3">
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Total Expenses</h2>
                        {data && (
                            <p>${parseFloat(data.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)).toFixed(2)}</p>
                        )}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Income</h2>
                        {incomeData && (
                            <p>${parseFloat(incomeData.amount).toFixed(2)}</p>
                        )}
                        {incomeData && (
                            <Link to={`/editincome/${incomeData.id}`} className="btn btn-warning">Edit Income</Link>
                        )}
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card h-100 rounded-3 text-center p-3">
                        <h2>Balance</h2>
                        {incomeData && data && (
                            <p>${parseFloat(incomeData.amount - data.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)).toFixed(2)}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <h2 className="mt-4">All Expenses</h2>
        <div className="mb-3">
            <Link to="/addexpense" className="btn btn-success">Add Expense</Link>
        </div>
        <table className="table table-bordered w-auto text-center">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>${parseFloat(expense.amount).toFixed(2)}</td>
                        <td>
                            <Link to={`/editexpense/${expense.id}`} className="btn btn-warning">Edit</Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(expense.id)}>Delete</button>
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
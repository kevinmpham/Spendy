import React from 'react'
import axois from 'axios'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar'

function Addexpense() {
    const [values, setValues] = React.useState({
        expenseName: '',
        expenseAmount: '',
        expenseDate: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axois.post('/add_expense', values)
        .then(res => {
            navigate('/dashboard')
            console.log(res)
        })
        .catch((err) => console.log(err))
    }

  return (
    <>
    <Navbar />
    <div className="container min-vh-100 d-flex justify-content-center align-items-start pt-5">
        <div className="w-100" style={{ maxWidth: '480px' }}>
            <h3 className="text-center mb-4">Add Expense</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name" 
                        required
                        onChange={(e) => setValues({...values, expenseName: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="decimal" 
                        className="form-control" 
                        id="amount" 
                        placeholder="Enter amount" 
                        required 
                        onChange={(e) => setValues({...values, expenseAmount: e.target.value})} />
                </div>
                <div classname="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        required 
                        onChange={(e) => setValues({...values, expenseDate: e.target.value})} />
                </div>
                <br />
                <div className='form-group my-3 text-center'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Addexpense
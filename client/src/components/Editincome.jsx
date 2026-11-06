import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

function Editincome() {
    const { id } = useParams();
    const [incomeData, setIncomeData] = useState(null);

    useEffect(() => {
        axios.get('/getincome/1') // Replace '1' with the actual income ID you want to fetch
        .then((res) => {
            setIncomeData(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(`/editincome/${id}`, incomeData)
        .then(() => {
            navigate('/dashboard');
        })
        .catch((err) => {
            console.error('Error updating income:', err);
        });
    }

  return (
    <>
      <Navbar />
      <div className="container min-vh-100 d-flex justify-content-center align-items-start pt-5">
        <div className="w-100" style={{ maxWidth: '480px' }}>
          <h2 className="text-center mb-4">Editing Income</h2>
          {incomeData && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  required
                  value={incomeData.amount}
                  onChange={(e) => setIncomeData({ ...incomeData, amount: e.target.value })}
                />
              </div>
              <div className='form-group my-3 text-center'>
                <button type='submit' className='btn btn-success'>Save</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  )
}

export default Editincome
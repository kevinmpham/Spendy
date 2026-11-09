import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

function Editincome() {
    const { id } = useParams();
    const [incomeData, setIncomeData] = useState(null);
    const [incomeSources, setIncomeSources] = useState(['', '']);

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

    function handleMultipleIncomeSubmit(e) {
        e.preventDefault();
        const totalIncome = incomeSources.reduce((total, source) => total + Number(source), 0);

        axios.post(`/editincome/${id}`, { incomeAmount: totalIncome })
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
                <label htmlFor="amount">Total Income</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  required
                  value={incomeData.incomeAmount}
                  onChange={(e) => setIncomeData({ ...incomeData, incomeAmount: e.target.value })}
                />
              </div>
              <div className='form-group my-3 text-center'>
                <button type='submit' className='btn btn-success'>Save</button>
              </div>
            </form>
          )}
          <br />
          <form onSubmit={handleMultipleIncomeSubmit}>
            <p className="mt-4">Or add multiple income entries:</p>
            <fieldset className="form-group">
              <legend className="col-form-label">Multiple Incomes</legend>
              {incomeSources.map((source, index) => (
                <div className="d-flex gap-2 mt-2" key={index}>
                  <input
                    type="number"
                    className="form-control"
                    aria-label={`Income ${index + 1}`}
                    placeholder={`Income ${index + 1}`}
                    required
                    value={source}
                    onChange={(e) => {
                      const updatedSources = [...incomeSources];
                      updatedSources[index] = e.target.value;
                      setIncomeSources(updatedSources);
                    }}
                  />
                  {incomeSources.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger"
                      aria-label={`Remove income source ${index + 1}`}
                      onClick={() => setIncomeSources(incomeSources.filter((_, sourceIndex) => sourceIndex !== index))}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-primary mt-2"
                onClick={() => setIncomeSources([...incomeSources, ''])}
              >
                Add another income source
              </button>
            </fieldset>
            <div className='form-group my-3 text-center'>
              <button type='submit' className='btn btn-success'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Editincome
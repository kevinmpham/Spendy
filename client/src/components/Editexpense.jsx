import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';


function Editexpense() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/getexpense/${id}`)
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.error('Error loading expense:', err);
      })
  }, [id]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`/editexpense/${id}`, data)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((err) => {
        console.error('Error updating expense:', err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container min-vh-100 d-flex justify-content-center align-items-start pt-5">
        <div className="w-100" style={{ maxWidth: '480px' }}>
          <h2 className="text-center mb-4">Editing Expense</h2>
          {data && (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  required
                  value={data.amount}
                  onChange={(e) => setData({ ...data, amount: e.target.value })}
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
  );
}

export default Editexpense
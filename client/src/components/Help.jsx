import React from 'react'
import Navbar from '../Navbar'

function Help() {
  return (
    <>
      <Navbar />
      <main className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 text-end">
            <img
              src="/dashboard-help.png"
              alt="Illustration of your dashboard"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>Your Dashboard</h2>
            <p>
              The top of your dashboard shows your total monthly expenses, income,
              and remaining balance.
            </p>
          </div>
        </div>
        <br />

        <div className="row g-4">
            <div className="col-12 col-md-6 text-end">
            <h2>Monthly Expenses</h2>
            <p>
              The bottom of your dashboard shows each monthly expenses with options to 
              edit/delete each expense.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/monthly-expenses-help.png"
              alt="Illustration of your monthly expenses"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <br />

        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 text-end">
            <img
              src="/expense-button-help.png"
              alt="Illustration of add expense button"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>Add Expenses</h2>
            <p>
              Click the "Add Expense" button to add a new expense. Fill in the name, amount, and date of the expense, then click "Save" to save it.
            </p>
          </div>
        </div>
        <br />

        <div className="row g-4 align-items-center">
            <div className="col-12 col-md-6 text-end">
            <h2>Edit and Delete Expenses</h2>
            <p>
                Each expense has an "Edit" and "Delete" button. Click "Edit" to modify the expense details, or click "Delete" to remove the expense from your list.
                WARNING: Deleting an expense is permanent and cannot be undone.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/action-buttons-help.png"
              alt="Illustration of action buttons for monthly expenses"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <br />

        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 text-end">
            <img
              src="/month-dropdown-help.png"
              alt="Illustration of month dropdown"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-6">
            <h2>Month Dropdown</h2>
            <p>
              Use the month dropdown to view your expenses for a specific month.
            </p>
          </div>
        </div>
        <br />

        <div className="row g-4 align-items-center">
            <div className="col-12 col-md-6 text-end">
            <h2>Sort Expenses</h2>
            <p>
                Use the sort dropdown to organize your expenses by name, amount, or date.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/sort-by-dropdown-help.png"
              alt="Illustration of sort dropdown"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <br />

      </main>
    </>
  )
}

export default Help
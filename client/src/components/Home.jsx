import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Navbar />
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <main class="px-3">
        <h1>Welcome to Spendy!.</h1>
        <p class="lead"></p>
        <p class="lead">Spendy is simple expense tracking app that helps you manage your money, track expenses, and stay on top of your financial goals. Monitor your spending and visualize where your money goes.
        </p>
        <div className="d-flex gap-2">
          <Link to="/dashboard" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Dashboard</Link>
          <Link to="/help" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Help</Link>
        </div>
      </main>
    </div>
    </>
  )
}


export default Home
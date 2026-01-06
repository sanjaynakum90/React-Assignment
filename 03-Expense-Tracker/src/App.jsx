import React from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'
import ExpenseData from './Components/ExpenseData'

import { GiExpense } from "react-icons/gi";

const App = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h1> <GiExpense /> Expense Tarcker</h1>
      </div>
      <ExpenseForm />
      <ExpenseData />
      <ExpenseList />

    </>
  )
}

export default App
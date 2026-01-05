import React from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'

const App = () => {
  return (
    <>
      <div className="text-center mt-4">
        <h1>Expense Tarcker</h1>
      </div>
      <ExpenseForm />
      <ExpenseList />

    </>
  )
}

export default App
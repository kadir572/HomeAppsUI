import api from '../api/expense'
import { Expense } from '../types/api/expense/Expense'
import ExpenseItem from './ExpenseItem'
import ExpenseContext from '../context/ExpenseContext'
import { useContext } from 'react'

const ExpensesList = () => {
  const { expenses, width, fetchExpenses } = useContext(ExpenseContext)

  const onExpenseDeleteHandler = async (expense: Expense) => {
    try {
      await api.delete(`/${expense._id}`)
    } catch (err) {
      let message
      if (err instanceof Error) message = err.stack
      else message = String(err)
      console.log(message)
    } finally {
      fetchExpenses()
    }
  }
  return (
    <ul
      className={`grid ${
        width <= 800
          ? 'grid-cols-[minmax(300px,_500px)]'
          : width <= 1200
          ? 'grid-cols-[minmax(300px,_500px)_minmax(300px,_500px)]'
          : 'grid-cols-[minmax(300px,_500px)_minmax(300px,_500px)_minmax(300px,_500px)]'
      } gap-2`}
    >
      {expenses.map((expense: Expense) => (
        <ExpenseItem
          key={expense._id}
          onDelete={onExpenseDeleteHandler}
          expense={expense}
        />
      ))}
    </ul>
  )
}

export default ExpensesList

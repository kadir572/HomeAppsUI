import { useEffect, useState } from 'react'
import api from '../api/expense'
import { useWindowSize } from '../hooks/useWindowSize'
import { Expense } from '../types/api/expense/Expense'
import ExpenseItem from './ExpenseItem'

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([])
  const size = useWindowSize()

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await api.get('/')
        if (response && response.data) setExpenses(response.data)
      } catch (err: any) {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchExpenses()
  }, [expenses])

  const onExpenseDeleteHandler = async (expense: Expense) => {
    try {
      const response = await api.delete(`/${expense._id}`)
      console.log(response)
    } catch (err) {
      let message
      if (err instanceof Error) message = err.stack
      else message = String(err)
      console.log(message)
    }
  }
  return (
    <ul
      className={`grid ${
        size.width <= 800
          ? 'grid-cols-[minmax(300px,_500px)]'
          : 'grid-cols-[minmax(300px,_500px)_minmax(300px,_500px)]'
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

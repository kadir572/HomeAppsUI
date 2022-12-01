import ExpenseItem from './ExpenseItem'
import { Expense } from '../types/Expense'
import { useEffect, useState } from 'react'
import api from '../api/expenses'

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await api.get('/expense')
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
    console.log('triggered')
    try {
      const response = await api.delete(`/expense/${expense._id}`)
      console.log(response)
    } catch (err) {
      let message
      if (err instanceof Error) message = err.stack
      else message = String(err)
      console.log(message)
    }
  }
  return (
    <ul className='grid grid-cols-[minmax(300px,_500px)] gap-2'>
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

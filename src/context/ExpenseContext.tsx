import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../api/expense'
import { useWindowSize } from '../hooks/useWindowSize'

const ExpenseContext = createContext<any>({})

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState([])
  const { width } = useWindowSize()

  useEffect(() => {
    fetchExpenses()
  }, [])

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

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        width,
        fetchExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContext

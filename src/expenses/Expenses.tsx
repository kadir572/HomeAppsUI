import AddExpense from './AddExpense'
import ExpensesList from './ExpensesList'
import { ExpenseProvider } from '../context/ExpenseContext'

const Expenses = () => {
  return (
    <div className='flex flex-col items-center'>
      <ExpenseProvider>
        <AddExpense />
        <ExpensesList />
      </ExpenseProvider>
    </div>
  )
}

export default Expenses

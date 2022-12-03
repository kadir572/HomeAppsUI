import AddExpense from './AddExpense'
import ExpensesList from './ExpensesList'

const Expenses = () => {
  return (
    <div className='flex flex-col items-center'>
      <AddExpense />
      <ExpensesList />
    </div>
  )
}

export default Expenses

import { Debtor } from '../types/api/expense/Debtor'
import { Expense } from '../types/api/expense/Expense'
import ExpenseDebtor from './ExpenseDebtor'

interface Props {
  expense: Expense
  onDelete: any
}

const ExpenseItem = ({ expense, onDelete }: Props) => {
  return (
    <li className='border py-2 px-3 rounded'>
      <div className='flex items-center justify-between mb-2 text-md font-semibold'>
        <span>{expense.title}</span>
        <span>CHF {expense.amount}</span>
      </div>
      <p className='text-sm'>{expense.description}</p>
      <hr className='my-4 border-none bg-slate-500 h-px' />
      <div className='flex justify-between mb-4'>
        <div className='flex flex-col'>
          <div className='grid grid-cols-1 gap-2'>
            {expense.debtors.map((debtor: Debtor) => (
              <ExpenseDebtor
                expenseId={expense._id}
                key={debtor._id}
                debtor={debtor}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col'>
          <span className='text-sm'>{expense.payor}</span>
        </div>
      </div>

      <div className='flex justify-end gap-3'>
        <button className='border border-blue-800 bg-blue-800/70 rounded px-2 py-1 hover:border-blue-700 hover:bg-blue-700/70 duration-200 text-sm'>
          Edit
        </button>
        <button
          onClick={() => onDelete(expense)}
          className='border border-red-800 bg-red-800/70 rounded px-2 py-1 hover:bg-red-700/70 hover:border-red-700 duration-200 text-sm'
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem

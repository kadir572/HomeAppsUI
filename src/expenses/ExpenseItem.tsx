import { Debtor } from '../types/api/expense/Debtor'
import { Expense } from '../types/api/expense/Expense'
import { ButtonType } from '../types/ui/expense/common/Button'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ExpenseDebtor from './ExpenseDebtor'

interface Props {
  expense: Expense
  onDelete: any
}

const ExpenseItem = ({ expense, onDelete }: Props) => {
  return (
    <Card>
      <li>
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
          <Button text='Edit' buttonType={ButtonType.Info} />
          <Button
            onClick={() => onDelete(expense)}
            text='Delete'
            buttonType={ButtonType.Danger}
          />
        </div>
      </li>
    </Card>
  )
}

export default ExpenseItem

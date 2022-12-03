import { useState } from 'react'
import { Debtor } from '../types/api/expense/Debtor'

type Props = {
  debtor: Debtor
}

const ExpenseDebtor = ({ debtor }: Props) => {
  const paidButtonHandler = () => {
    console.log(debtor)
    setIsPaid(prev => (prev = !prev))
  }
  const [isPaid, setIsPaid] = useState(false)
  return (
    <div className='grid grid-cols-[2fr_1fr_3fr] gap-3' key={debtor._id}>
      <span className='text-sm'>{debtor.name}</span>
      <span className='text-sm'>{debtor.amount}</span>
      <button
        onClick={paidButtonHandler}
        className={`border ${
          isPaid
            ? 'bg-green-800/70 border-green-800 rounded hover:bg-green-700/70 hover:border-green-700'
            : 'bg-red-800/70 border-red-800 rounded hover:bg-red-700/70 hover:border-red-700'
        } duration-200 px-2 py-px text-sm`}
      >
        {isPaid ? 'Paid' : 'Unpaid'}
      </button>
    </div>
  )
}

export default ExpenseDebtor

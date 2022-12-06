import { useEffect, useState } from 'react'
import { Debtor } from '../types/api/expense/Debtor'
import api from '../api/expense'
import { Expense } from '../types/api/expense/Expense'
import Button from '../UI/Button'
import { ButtonSize, ButtonType } from '../types/ui/expense/common/Button'

type Props = {
  debtor: Debtor
  expenseId: any
}

const ExpenseDebtor = ({ debtor, expenseId }: Props) => {
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    const setPaidStatus = async () => {
      try {
        const allExpenses = await api.get('/')
        setIsPaid(
          allExpenses.data
            .filter((expense: Expense) => expense._id === expenseId)[0]
            .debtors.filter((d: Debtor) => d._id === debtor._id)[0].paid
        )
      } catch (err) {
        console.log(err)
      }
    }

    setPaidStatus()
  }, [])

  const paidButtonHandler = async () => {
    try {
      const response = await api.put(`/${expenseId}/debtor/${debtor._id}`)
      if (response.status === 200 && response.data) {
        setIsPaid(
          response.data.debtors.filter((d: Debtor) => d._id === debtor._id)[0]
            .paid
        )
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='grid grid-cols-[2fr_1fr_50%] gap-3' key={debtor._id}>
      <span className='text-sm'>{debtor.name}</span>
      <span className='text-sm'>{debtor.amount}</span>

      <Button
        type='button'
        buttonType={isPaid ? ButtonType.Primary : ButtonType.Danger}
        text={isPaid ? 'Paid' : 'Unpaid'}
        size={ButtonSize.Sm}
      />
    </div>
  )
}

export default ExpenseDebtor

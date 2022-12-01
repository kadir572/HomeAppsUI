import { useEffect, useState } from 'react'

type Props = {
  index: number
  onNameChange: any
  onAmountChange: any
  getName: any
  getAmount: any
}

const AddExpenseDebtor = ({
  index,
  onAmountChange,
  onNameChange,
  getName,
  getAmount,
}: Props) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  // useEffect(() => {
  //   onNameChange(index, name)
  // }, [name])

  // useEffect(() => {
  //   onAmountChange(index, amount)
  // }, [amount])

  return (
    <div className='w-20'>
      <label htmlFor='debtorName'>Name</label>
      <input
        className='max-w-full rounded text-black px-1 py-px'
        type='text'
        name='debtorName'
        id='debtorName'
        value={getName(index)}
        onChange={e => onNameChange(index, e.target.value)}
      />
      <label htmlFor='debtorAmount'>Amount</label>
      <input
        className='max-w-full rounded text-black px-1 py-px'
        type='number'
        name='debtorAmount'
        id='debtorAmount'
        value={getAmount(index)}
        onChange={e => onAmountChange(index, e.target.value)}
      />
    </div>
  )
}

export default AddExpenseDebtor

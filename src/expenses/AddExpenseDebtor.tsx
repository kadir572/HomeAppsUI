import { useEffect, useState } from 'react'

type Props = {
  index: number
  onNameChange: any
  onAmountChange: any
}

const AddExpenseDebtor = ({ index, onAmountChange, onNameChange }: Props) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  // useEffect(() => {
  //   onNameChange(index, name)
  // }, [name])

  // useEffect(() => {
  //   onAmountChange(index, amount)
  // }, [amount])

  const onChangeNameHandler = (e: any) => {
    setName(e.target.value)
    onNameChange(index, e.target.value)
  }

  const onChangeAmountHandler = (e: any) => {
    setAmount(e.target.value)
    onAmountChange(index, e.target.value)
  }

  return (
    <div className='w-20'>
      <label htmlFor='debtorName'>Name</label>
      <input
        className='max-w-full rounded text-black px-1 py-px'
        type='text'
        name='debtorName'
        id='debtorName'
        value={name}
        onChange={onChangeNameHandler}
      />
      <label htmlFor='debtorAmount'>Amount</label>
      <input
        className='max-w-full rounded text-black px-1 py-px'
        type='number'
        name='debtorAmount'
        id='debtorAmount'
        value={amount}
        onChange={onChangeAmountHandler}
      />
    </div>
  )
}

export default AddExpenseDebtor

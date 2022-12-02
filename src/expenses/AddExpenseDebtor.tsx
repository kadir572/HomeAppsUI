import { useEffect, useState } from 'react'

type Props = {
  index: number
  onNameChange: any
  onAmountChange: any
  isReset: boolean
}

const AddExpenseDebtor = ({
  index,
  onAmountChange,
  onNameChange,
  isReset,
}: Props) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    onNameChange(index, e.target.value)
  }

  const onChangeAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
    onAmountChange(index, e.target.value)
  }

  const resetAll = () => {
    setName('')
    setAmount('')
  }

  useEffect(() => {
    if (isReset) resetAll()
  }, [isReset])

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

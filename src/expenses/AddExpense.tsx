import { useState } from 'react'
import AddExpenseDebtor from './AddExpenseDebtor'
import api from '../api/expenses'
import { Expense } from '../types/ui/Expense'

const AddExpense = () => {
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [payor, setPayor] = useState('')
  const [description, setDescription] = useState('')
  const [debtors, setDebtors] = useState([{ name: '', amount: '' }])
  const [isResetState, setIsResetState] = useState(true)

  const submitFormHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newExpense: Expense = {
      title,
      amount: Number(amount),
      description,
      payor,
    }

    const filteredDebtors = debtors
      .filter(debtor => debtor.name !== '' && debtor.amount !== '')
      .map(dbtr => ({ ...dbtr, amount: Number(dbtr.amount) }))

    if (filteredDebtors.length > 0) newExpense.debtors = filteredDebtors

    resetForm()

    try {
      await api.post('/expense', newExpense)
    } catch (err) {
      console.log(err)
    }
  }

  const addDebtor = () => {
    setIsResetState(false)
    if (debtors.length >= 3) return
    setDebtors(prev => (prev = [...prev, { name: '', amount: '' }]))
  }

  const onDebtorNameChange = (index: number, value: string) => {
    setIsResetState(false)
    const updatedDebtors = debtors.map(debtor => {
      if (debtors.indexOf(debtor) === index) {
        return { ...debtor, name: value }
      }
      return debtor
    })

    setDebtors(updatedDebtors)
  }

  const onDebtorAmountChange = (index: number, value: string) => {
    setIsResetState(false)
    const updatedDebtors = debtors.map(debtor => {
      if (debtors.indexOf(debtor) === index) {
        return { ...debtor, amount: value }
      }
      return debtor
    })

    setDebtors(updatedDebtors)
  }

  const resetForm = () => {
    setTitle('')
    setAmount('')
    setPayor('')
    setDescription('')
    setDebtors([{ name: '', amount: '' }])
    setIsResetState(true)
  }

  return (
    <>
      <button
        onClick={() => setShowForm(prev => (prev = !prev))}
        className={`border ${
          !showForm
            ? 'bg-green-800/70 border-green-800 rounded hover:bg-green-700/70 hover:border-green-700'
            : 'bg-red-800/70 border-red-800 rounded hover:bg-red-700/70 hover:border-red-700'
        }  duration-200 px-2 py-1 text-sm mb-2`}
      >
        {!showForm ? 'Add Expense' : 'Hide Form'}
      </button>
      {showForm && (
        <div className='grid grid-cols-[minmax(300px,_500px)]'>
          <form
            onSubmit={submitFormHandler}
            className='flex flex-col gap-4 pb-4'
          >
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='title'>Title</label>
                <input
                  className='rounded text-black px-1 py-px'
                  type='text'
                  name='title'
                  id='title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className='w-20 flex flex-col gap-1'>
                <label htmlFor='amount'>Amount</label>
                <input
                  className='max-w-full rounded text-black px-1 py-px'
                  type='number'
                  name='amount'
                  id='amount'
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className='w-20 flex flex-col gap-1'>
                <label htmlFor='payor'>Payor</label>
                <input
                  className='max-w-full rounded text-black px-1 py-px'
                  type='text'
                  name='payor'
                  id='payor'
                  value={payor}
                  onChange={e => setPayor(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='description'>Description</label>
              <textarea
                className='w-full rounded h-20 text-black px-1 py-px'
                name='description'
                id='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>
            <div className='flex gap-2 items-center'>
              <div className='flex gap-2 items-center'>
                {debtors.map(debtor => (
                  <AddExpenseDebtor
                    isReset={isResetState}
                    onNameChange={onDebtorNameChange}
                    onAmountChange={onDebtorAmountChange}
                    key={`debtor-${debtors.indexOf(debtor)}`}
                    index={debtors.indexOf(debtor)}
                  />
                ))}
              </div>
              <button
                type='button'
                onClick={addDebtor}
                className='border border-blue-800 bg-blue-800/70 rounded px-2 py-1 hover:border-blue-700 hover:bg-blue-700/70 duration-200 text-sm'
              >
                + Add Debtor
              </button>
            </div>
            <div className='flex gap-2'>
              <button
                className='bg-green-800/70 border-green-800 rounded hover:bg-green-700/70 hover:border-green-700 disabled:bg-green-800/20 disabled:border-green-800/20 disabled:hover:bg-green-800/20 disabled:hover:border-green-800/20 duration-200 px-2 py-1 text-sm mb-2 border max-w-max'
                type='submit'
                disabled={!(title && description && amount && payor)}
              >
                Submit Expense
              </button>
              <button
                onClick={resetForm}
                className='bg-red-800/70 border-red-800 rounded hover:bg-red-700/70 hover:border-red-700 duration-200 px-2 py-1 text-sm mb-2 border max-w-max'
                type='button'
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AddExpense

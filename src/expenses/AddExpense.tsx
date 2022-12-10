import { useContext, useState } from 'react'
import api from '../api/expense'
import ExpenseContext from '../context/ExpenseContext'
import { ButtonType } from '../types/ui/expense/common/Button'
import { Expense } from '../types/ui/expense/Expense'
import Button from '../UI/Button'
import AddExpenseDebtor from './AddExpenseDebtor'

const AddExpense = () => {
  const { fetchExpenses } = useContext(ExpenseContext)
  const debtorLimit: number = 3

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
      await api.post('/', newExpense)
    } catch (err) {
      console.log(err)
    }
    fetchExpenses()
  }

  const addDebtor = () => {
    setIsResetState(false)
    if (debtors.length >= debtorLimit) return
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
      <Button
        onClick={() => setShowForm(prev => (prev = !prev))}
        buttonType={showForm ? ButtonType.Danger : ButtonType.Primary}
        text={showForm ? 'Hide Form' : 'Add Expense'}
      />
      {showForm && (
        <div className='grid grid-cols-[minmax(300px,_500px)]'>
          <form
            onSubmit={submitFormHandler}
            className='flex flex-col gap-4 pb-4 max-w-full'
          >
            <div className='flex flex-col xs:flex-row justify-between gap-2'>
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
              {debtors.length < debtorLimit && (
                <Button
                  onClick={addDebtor}
                  type='button'
                  buttonType={ButtonType.Info}
                  text='+ Add Debtor'
                />
              )}
            </div>
            <div className='flex gap-2'>
              <Button
                type='submit'
                text='Submit Expense'
                disabled={!(title && description && amount && payor)}
                buttonType={ButtonType.Primary}
              />
              <Button
                onClick={resetForm}
                type='button'
                buttonType={ButtonType.Danger}
                text='Reset'
              />
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AddExpense

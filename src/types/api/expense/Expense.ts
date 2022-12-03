import { Debtor } from './Debtor'

export type Expense = {
  title: string
  description: string
  amount: number
  payor: string
  debtors: Debtor[]
  _id?: string
}

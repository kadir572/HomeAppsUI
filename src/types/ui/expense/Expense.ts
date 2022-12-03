import { Debtor } from './Debtor'

export type Expense = {
  title: string
  amount: number
  description: string
  payor: string
  debtors?: Debtor[]
}

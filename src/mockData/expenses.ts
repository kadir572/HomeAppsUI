import { Expense } from '../types/Expense'

export const expenses: Expense[] = [
  {
    title: 'Shelf and screws',
    description: 'Bought a shelf and screws to attach it to the wall',
    amount: 140,
    payor: 'Kadir',
    debtors: [
      {
        name: 'Burak',
        amount: 47,
        paid: false,
      },
      {
        name: 'Arda',
        amount: 47,
        paid: false,
      },
    ],
  },
  {
    title: 'Aldi',
    description: '1 package of egg and 3 Most Bröckli',
    amount: 12,
    payor: 'Arda',
    debtors: [
      {
        name: 'Kadir',
        amount: 12,
        paid: false,
      },
    ],
  },
]

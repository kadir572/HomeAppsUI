import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  isClosed: boolean
}

const MobileNavigation = ({ isClosed }: Props) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 z-40 overflow-hidden  transition-[height, padding] duration-200 ${
        !isClosed ? 'h-16 pt-2' : 'h-0 pt-0'
      }`}
    >
      <NavLink to='expenses'>ExpenseTracker</NavLink>
      <NavLink to='shopping'>ShoppingList</NavLink>
    </div>
  )
}

export default MobileNavigation

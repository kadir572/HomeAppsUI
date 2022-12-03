import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <nav className='flex gap-6'>
      <NavLink className='text-slate-300' to='expenses'>
        ExpenseTracker
      </NavLink>
      <NavLink className='text-slate-300' to='shopping'>
        ShoppingList
      </NavLink>
    </nav>
  )
}

export default MainNavigation

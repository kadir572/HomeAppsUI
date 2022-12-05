import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../hooks/useWindowSize'
import MainNavigation from './MainNavigation'
import BurgerMenu from './BurgerMenu'
import MobileNavigation from './MobileNavigation'

const Header = () => {
  const [isBurgerMenuClosed, setIsBurgerMenuClosed] = useState(true)
  const size = useWindowSize()
  return (
    <header className='flex flex-col py-3 px-6 text-white bg-slate-900/90 z-50'>
      <div className='flex justify-between items-center'>
        <Link to='/' className='text-2xl'>
          HomeApps
        </Link>
        {size.width <= 500 ? (
          <BurgerMenu setIsClosed={setIsBurgerMenuClosed} />
        ) : (
          <MainNavigation />
        )}
      </div>
      {size.width <= 500 && <MobileNavigation isClosed={isBurgerMenuClosed} />}
    </header>
  )
}

export default Header

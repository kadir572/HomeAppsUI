import { Link } from 'react-router-dom'
import MainNavigation from './MainNavigation'

const Header = () => {
  return (
    <header className='flex justify-between py-3 px-6 text-white bg-slate-900/90'>
      <Link to='/' className='text-2xl'>
        HomeApps
      </Link>
      <MainNavigation />
    </header>
  )
}

export default Header

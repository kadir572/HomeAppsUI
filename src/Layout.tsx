import { Outlet } from 'react-router-dom'
import Header from './partials/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='p-2'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout

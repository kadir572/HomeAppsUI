import { useState } from 'react'

type Props = {
  setIsClosed: any
}

const BurgerMenu = ({ setIsClosed }: Props) => {
  const [menuClosed, setMenuClosed] = useState(true)

  const toggle = () => {
    setMenuClosed(prev => (prev = !prev))
    setIsClosed(!menuClosed)
  }
  return (
    <div onClick={toggle} className=' py-3'>
      <div
        className={`relative w-8 h-0.5  before:w-8 before:h-0.5  before:absolute before:-translate-y-3 after:absolute after:w-8 after:h-0.5 transition duration-200 before:duration-200 after:duration-200 ease-out before:ease-out after:ease-out after:translate-y-3 before:origin-top-left after:origin-bottom-left ${
          menuClosed
            ? 'bg-white before:bg-white after:bg-white'
            : 'bg-transparent before:bg-red-800 after:bg-red-800 before:rotate-[40deg] after:-rotate-[40deg] before:translate-x-1.5 before:-translate-y-2.5 after:translate-x-1.5 after:translate-y-2.5'
        }`}
      ></div>
    </div>
  )
}

export default BurgerMenu

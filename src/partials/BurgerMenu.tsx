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
      {/* <div
        className={`w-8 h-0.5 bg-gray-600 ${
          !menuClosed ? 'bg-red-600' : 'bg-gray-600'
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-gray-600 ${
          !menuClosed ? 'bg-red-600' : 'bg-gray-600'
        }`}
      ></div>
      <div
        className={`w-8 h-0.5 bg-gray-600 ${
          !menuClosed ? 'bg-red-600' : 'bg-gray-600'
        }`}
      ></div> */}
      <div
        className={`relative w-8 h-0.5 bg-gray-600 before:w-8 before:h-0.5 before:bg-gray-600 before:absolute before:-top-3 after:absolute after:w-8 after:h-0.5 after:bg-gray-600 after:top-3`}
      ></div>
    </div>
  )
}

export default BurgerMenu

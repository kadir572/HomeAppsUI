import { Link } from 'react-router-dom'

interface Props {
  path: string
  name: string
}

const LandingLink = ({ path, name }: Props) => {
  return (
    <Link
      className='py-2 border rounded text-3xl text-center bg-slate-600 hover:bg-slate-800 duration-200'
      to={path}
    >
      {name}
    </Link>
  )
}

export default LandingLink

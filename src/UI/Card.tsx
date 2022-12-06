type Props = {
  children: JSX.Element
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className='border py-2 px-3 rounded'>{children}</div>
}

export default Card

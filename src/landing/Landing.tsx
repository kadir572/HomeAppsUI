import LandingLink from './LandingLink'

const Landing = () => {
  return (
    <div className='grid max-w-xs gap-6 m-auto mt-12'>
      <LandingLink path='expenses' name='Expenses' />
      <LandingLink path='shopping' name='Shopping List' />
    </div>
  )
}

export default Landing

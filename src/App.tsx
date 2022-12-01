import { Routes, Route } from 'react-router-dom'
import Expenses from './expenses/Expenses'
import Landing from './landing/Landing'
import Layout from './Layout'
import Shopping from './shopping/Shopping'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='expenses'>
          <Route index element={<Expenses />} />
        </Route>
        <Route path='shopping'>
          <Route index element={<Shopping />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

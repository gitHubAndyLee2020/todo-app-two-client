import './App.css'

import Form from './components/Form'
import Todos from './components/todos/todos'

import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getTodos} from './actions/todos'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div>
      <Form />
      <Todos />
    </div>
  )
}

export default App

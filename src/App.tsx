import { useState } from 'react'
import './App.css'
import CounterComponent from './components/CounterComponent'
import ToDoComponent from './components/ToDoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <CounterComponent />
    <ToDoComponent />
    </div>
  )
}

export default App

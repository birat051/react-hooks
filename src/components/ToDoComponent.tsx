import { useCallback, useState } from 'react'
import ToDoChildComponent from './ToDoChildComponent'
import styles from '../styles/todo.module.css'

function ToDoComponent() {
  const [todo, settodo] = useState<string[]>([])
  const [clicked, setclicked] = useState(false)
  const addToDO=useCallback(
    (value: string) => {
    settodo((prev)=>[...prev,value])
    },
    [todo],
  )
  const clickMe=()=>{
    setclicked(!clicked)
  }
  return (
    <div className={styles.todocontainer}>
      <h1>ToDO List</h1>
      <ToDoChildComponent todo={todo} addTodo={addToDO}/>
      {!clicked && <button onClick={clickMe}>Click me</button>}
      {clicked && <button onClick={clickMe}>I have been clicked!</button>}
    </div>
  )
}

export default ToDoComponent

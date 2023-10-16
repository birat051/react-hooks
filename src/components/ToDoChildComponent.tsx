import React, { useState } from "react"
import styles from '../styles/todo.module.css'
import { memo } from "react"

type ToDoChildProp=
{
  todo: string[],
  addTodo: (todovalue:string)=>void
}

//this component will be re-rendered everytime addToDo function is being hoisted unless we memoize the function and make it rerender only when todo list value changes
function ToDoChildComponent(props:ToDoChildProp) {
  const [task, settask] = useState('')
  const changeTask=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    settask(e.target.value)
  }
  console.log('Todo child is being rendered')
  const addTask=()=>{
    settask('')
    props.addTodo(task)
  }
  return (
    <div className={styles.todocontainer}>
      {props.todo.map((value,index)=>{
        return (
          <h2 key={index}>{value}</h2>
        )
      })}
      <input type="text" placeholder="Enter a task" value={task} onChange={changeTask} className={styles.todoinput}/>
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default memo(ToDoChildComponent)


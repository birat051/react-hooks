import { useMemo, useState } from "react"
import styles from '../styles/counter.module.css'

function CounterComponent() {
  const [counter, setcounter] = useState(0)
  const [clicked, setclicked] = useState(false)
  const checkCounter=(myNum:number)=>{   //   If we use this function directly to get checkData value, the calculation is very expensive and on every re-render this value will be calculated again thus slowing down the app performance
    for(let i=0;i<1000000000;i++)
    {

    }
    return myNum
  }
  const checkData=useMemo(() => checkCounter(counter), [counter])  // In this case, the value wont be recomputated unless the value of counter variable changes
  const addCounter=()=>{
    setcounter((prev)=>prev+1)
  }
  const clickMe=()=>{
    setclicked(!clicked)
  }
  return (
    <div className={styles.countercontainer}>
        <button onClick={addCounter}>Add counter</button>
        <p>Counter value is {checkData}</p>
        {!clicked && <button onClick={clickMe}>Click me</button>}
        {clicked && <button onClick={clickMe}>I have been clicked!</button>}
    </div>
  )
}

export default CounterComponent

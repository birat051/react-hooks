import { useEffect, useRef, useState } from "react"
import styles from '../../styles/counter.module.css'

function Timer() {
    const timerRef = useRef<number | null>(null); 
  const [time, settime] = useState(0)
  useEffect(() => {
    timerRef.current=setInterval(()=>{
        settime((prev)=>prev+1)
    },1000)
    return () => {
      clearInterval(timerRef.current as number)
    }
  }, [])
  
  return (
    <div className={styles.countercontainer}>
        <h1>Using useRef hook to store the set interval object</h1>
        <p>Timer count is {time}</p>
        <button onClick={()=>{clearInterval(timerRef.current as number)
        settime(0)
        }}>Clear Timer</button>
    </div>
  )
}

export default Timer

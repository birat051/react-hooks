import useMultiplyCount from './MutiplyHooks'
import styles from '../../styles/counter.module.css'

function CustomHooksCounter() {
  const [count,multiplyCount] = useMultiplyCount(1)
  return (
    <div className={styles.countercontainer}>
      <h1>Using Custom Hooks</h1>
      <p>Current value is: {count}</p>
      <button onClick={multiplyCount}>Multiply by 2</button>
    </div>
  )
}

export default CustomHooksCounter

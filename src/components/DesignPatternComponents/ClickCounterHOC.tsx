import { Component } from 'react'
import { ChildHocCounterProps } from './HoverCounterHOC'
import HigherOrderParent from './HigherOrderParent'
import styles from '../../styles/counter.module.css'

class ClickCounterHOC extends Component<ChildHocCounterProps> {
  render() {
    const {count,incrementCounter} = this.props
    return (
        <div className={styles.countercontainer}>
        <h1>Using higher order component</h1>
        <p>You have pressed the button {count} times</p>
        <button onClick={incrementCounter}>Click me</button>
      </div>
    )
  }
}

const EnhancedClickCounter=HigherOrderParent({OriginalComponent: ClickCounterHOC})

export default EnhancedClickCounter

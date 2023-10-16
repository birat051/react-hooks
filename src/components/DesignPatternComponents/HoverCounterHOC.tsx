import { Component } from 'react'
import HigherOrderParent from './HigherOrderParent'
import styles from '../../styles/counter.module.css'


export type ChildHocCounterProps = {
  count: number;
  incrementCounter: () => void;
}

class HoverCounterHOC extends Component<ChildHocCounterProps> {
  render() {
    const { count, incrementCounter } = this.props
    return (
      <div className={styles.countercontainer}>
        <h1>Using higher order component</h1>
        <p onMouseEnter={incrementCounter}>You have hovered {count} times</p>
      </div>
    )
  }
}

const EnhancedHoverCounter = HigherOrderParent({ OriginalComponent: HoverCounterHOC });

export default EnhancedHoverCounter

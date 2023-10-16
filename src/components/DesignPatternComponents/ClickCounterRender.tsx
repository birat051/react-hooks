import { Component } from 'react'
import { ChildHocCounterProps } from './HoverCounterHOC'

export class ClickCounterRender extends Component<ChildHocCounterProps> {
  render() {
    const {count,incrementCounter}=this.props
    return (
      <div>
        <p>I have been clicked {count} times</p>
        <button onClick={incrementCounter}>Add counter</button>
      </div>
    )
  }
}

export default ClickCounterRender

import { Component } from 'react'
import { ChildHocCounterProps } from './HoverCounterHOC'

export class ClickHoverRender extends Component<ChildHocCounterProps>  {
    render() {
        const { count, incrementCounter } = this.props
        return (
          <div>
            <h1>Using render prop component</h1>
            <p onMouseEnter={incrementCounter}>You have hovered {count} times</p>
          </div>
        )
    }
}

export default ClickHoverRender

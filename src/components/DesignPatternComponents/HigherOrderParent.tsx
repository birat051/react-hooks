import React from 'react'

export type HigherOrderParentType = {
  OriginalComponent: React.ComponentType<{ count: number, incrementCounter: () => void }>;
}

function HigherOrderParent(props: HigherOrderParentType) {
  class NewComponent extends React.Component {
    state = {
      count: 0
    }

    incrementCounter = () => {
      this.setState((prevState: { count: number }) => {
        return { count: prevState.count + 1 }
      })
    }

    render() {
      return <props.OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} />
    }
  }

  return NewComponent
}

export default HigherOrderParent

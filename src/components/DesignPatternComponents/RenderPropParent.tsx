import { Component, ReactNode } from 'react'
import styles from '../../styles/counter.module.css'

type RenderPropType=
{
    render: (count:number,incrementCounter:()=>void)=>ReactNode;
}

class RenderPropParent extends Component<RenderPropType> {
    state = {
        count: 0
      }
  
      incrementCounter = () => {
        this.setState((prevState: { count: number }) => {
          return { count: prevState.count + 1 }
        })
      }
  render() {
    return (
      <div className={styles.countercontainer}>
      {this.props.render(this.state.count,this.incrementCounter)}
      </div>
    )
  }
}

export default RenderPropParent

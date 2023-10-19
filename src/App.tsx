import './App.css'
import EnhancedClickCounter from './components/DesignPatternComponents/ClickCounterHOC'
import ClickCounterRender from './components/DesignPatternComponents/ClickCounterRender'
import ClickHoverRender from './components/DesignPatternComponents/ClickHoverRender'
import EnhancedHoverCounter from './components/DesignPatternComponents/HoverCounterHOC'
import RenderPropParent from './components/DesignPatternComponents/RenderPropParent'
import CounterComponent from './components/HooksComponents/CounterComponent'
import CustomHooksCounter from './components/HooksComponents/CustomHooksCounter'
import Timer from './components/HooksComponents/Timer'
import ToDoComponent from './components/HooksComponents/ToDoComponent'

function App() {
  return (
    <div className='app'>
    <CounterComponent />
    <ToDoComponent />
    <EnhancedClickCounter />
    <EnhancedHoverCounter />
    <RenderPropParent render={(count,incrementCounter)=><ClickCounterRender count={count} incrementCounter={incrementCounter}/>}/>
    <RenderPropParent render={(count,incrementCounter)=><ClickHoverRender count={count} incrementCounter={incrementCounter}/>}/>
    <CustomHooksCounter />
    <Timer />
    </div>
  )
}

export default App

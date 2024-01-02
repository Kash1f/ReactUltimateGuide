import { useContext } from 'react'
import Counter from './components/Counter'
import { CounterContext } from './context/Counter'

function App() {

 const counterContext = useContext(CounterContext)

  return (
    <>
    <div className="App">
    <h1>Count is 0</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>

    </div>






    </>
  )
}

export default App

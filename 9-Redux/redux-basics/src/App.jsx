import Counter from './components/Counter'
import './App.css'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch();

  return (
    <>
    <button onClick={(e) => dispatch({type:'INCREMENT'})}>Increment</button>
  <Counter/>
  <button onClick={(e) => dispatch({type: 'DECREMENT'})}>Decrement</button>
    </>
  )
}

export default App

//Notes:
//useDispatch will be used to dispatch actions

//Steps for this redux example

//1. Created buttons Increment and Decrement aur usme hum events dispatch kar rahe hain
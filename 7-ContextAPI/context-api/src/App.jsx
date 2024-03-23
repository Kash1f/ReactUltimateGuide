//useContext() = React Hook that allows you to share valueS
//               between multiple levels of components without
//               passing props to each level


//  We have to setup a provider component which component has the data
//  that we would like to access to, in this case it would be ComponentA

//  Following steps would be performed in ComponentA

// PROVIDER COMPONENT
//  1. import {createContext} from 'react;
//  2. export const MyContext = createContext();
//  3. <MyContext.Provider value={value}>
//       <Child/>
//   <MyContext.Provider>

// CONSUMER COMPONENTS 
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);


import CompA from "./components/CompA"

function App() {



  return (
    <>
    <div className="App">
   
    </div>

    <CompA/>
    </>
  )
}

export default App

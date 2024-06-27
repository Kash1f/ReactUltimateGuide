import { useState } from 'react'
import {createContext} from 'react'

export const CounterContext = createContext(null)

export const CounterProvider = ({children}) => {

    const [count , setCount] = useState(0)

    return (
        <CounterContext.Provider value={{count}}>
            {children}
        </CounterContext.Provider>
        )  
}





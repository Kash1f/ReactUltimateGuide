import {createContext} from 'react'

export const CounterContext = createContext(null)

export const CounterProvider = ({children}) => {
    return (
        <CounterContext.Provider>
            {children}
        </CounterContext.Provider>
        )  
}





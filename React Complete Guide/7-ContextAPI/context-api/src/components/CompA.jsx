import { createContext } from "react"
import CompB from "./CompB"

//context name should be descriptive of what you are working with
export const UserContext = createContext();


const CompA = () => {

 const user = "mydata"

  return (
    <>
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      
      <UserContext.Provider value={user}>
      <CompB user={user}/>
      </UserContext.Provider>
      

    </div>
    </>
  )
}

export default CompA
import React,{useContext} from "react"
import { UserContext } from "./CompA"

const CompD = () => {

  const user = useContext(UserContext)


  return (
    <div className="box">
        <h1>CompD</h1>
        <h2>{`Bye${user}`}</h2>
    </div>
  )
}

export default CompD
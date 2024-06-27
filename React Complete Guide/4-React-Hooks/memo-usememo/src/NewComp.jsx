import React,{memo} from 'react'


const NewComp = (props) => {


    console.log("newComp render");




  return (
    <div>
        <h1>
        NewComp {props.newCount}</h1>
         </div>
  )
}

export default memo(NewComp);
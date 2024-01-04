import React from 'react'

const ListItems = () => {

    const items = ["Item1", "Item2", "Item3", "Item4"]

    


  return (

    <>
    <ul>

    {items.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
       
    </ul>
   </> 
    )
  }

export default ListItems
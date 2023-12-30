import React from 'react'
import CompB from './CompC'

const CompA = ({data}) => {

 
  return (
    <>
    <div>CompA</div>
        <CompB data={data}/>

    </>
  )
}

export default CompA
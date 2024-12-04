import React from 'react'
import { useParams } from 'react-router-dom';

const ParamComp = () => {

    //id nikalni hai apne parameters se 
    const { id } = useParams();

  return (
    <div>
        {/* id will be printed on the page when this component will be called */}
        Params : {id}
    </div>
  )
}

export default ParamComp

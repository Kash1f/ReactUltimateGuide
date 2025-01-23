import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const FocusLoginExample = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Username"/>
    </div>
  )
}

export default FocusLoginExample

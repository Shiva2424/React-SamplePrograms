import React from 'react'
import { useEffect } from 'react'

function ChildDemo() {

    useEffect(() => {
        console.log("I am Child Demo");
    },[])
  return (
    <div> I am ChildDemo</div>
  )
}

export default ChildDemo
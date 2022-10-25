import React, { useEffect, useState } from 'react'

function StateDemo() {
    let [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout( () => {
            //setCount((prev) => prev + 2);
            count = 4;
            console.log(count)
        },5000)
    })
    
  return (
    <>
    <div>StateDemo</div>
    Count - {count}
    </>
  )
}

export default StateDemo
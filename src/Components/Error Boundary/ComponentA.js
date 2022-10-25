import React, { useEffect, useState } from 'react'

function ComponentA() {
    const [count, setCount] = useState(0);

    useEffect(() => {
            if(count === 5) {
                throw new Error("page Crashed");
            }
    },[count])

  return (
  <>
    <div>Count is - {count}</div>
    <button onClick = {() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default ComponentA
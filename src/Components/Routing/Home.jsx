import React, { useEffect } from 'react'

function Home() {
    useEffect(() => {
        console.log("I am Home");
    },[])
  return (
    <div>I am Home</div>
  )
}

export default Home
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChildDemo from "./ChildDemo";

function Demo({count, isvisible, setIsVisible, setCount, name}) {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setInterval(function() { setCount((prev) => prev + 1)},1000)
    // },[])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(result => {console.log(result)})
    },[])
    useEffect(() => {
      let myinterval;
        if (isvisible) {
          myinterval = setInterval(function() { setCount(prev => prev + 1)},1000)
        } 
        return () => {
  clearInterval(myinterval)
        }
      },[isvisible]);

    useEffect(() => {
        setIsVisible(true);
console.log("I am Demo");
        return (() => {
            setIsVisible(false);
        })
    }
    ,[]);
  return (
    <>
    Name is {name}
      <div>I am Demo</div>
      Count Value : {count}
      {/* <ChildDemo /> */}
    </>
  );
}

Demo.defaultProps = {
  name: 'Shiva',
}

export default Demo;


import React, { useMemo, useRef, useState } from 'react'

function UseMemoDemo() {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(5);
    const factorial = useMemo(() => fact(number), [number]);
  return (
    <>
    <div>UseMemoDemo</div>
    <div>
    Counter Value is : {counter}
    <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
    </div>
    <div>
        Factorial of {number} is {factorial}
    <button onClick={(e) => setNumber(number + 1)}>factorial Increment</button>
    </div>
    </>
  )
}

const fact = (num) => {
    let result = 1;
for(let i = num; i > 0 ; i--) {
    result = result * i;
}
console.log("Factorial function calling");
return result;
}
export default UseMemoDemo
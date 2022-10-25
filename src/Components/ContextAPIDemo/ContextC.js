import React, { useContext } from 'react'
import {data} from './ContextA'

function ContextC() {
    const person = useContext(data);
    console.log(person)
  return (
    <>
    <div>ContextC</div>
    Data from context is {person.name} {person.age}
    </>
  )
}

export default ContextC
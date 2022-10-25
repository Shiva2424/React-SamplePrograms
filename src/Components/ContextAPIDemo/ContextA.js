import React, { createContext } from 'react'
import ContextB from './ContextB';


export const data = React.createContext();
function ContextA() {
    let details = {
        name: 'Shiva',
        age: 27,
        city:'Nlg',
    }
  return (
    <>
    <div>ContextA</div>
    <data.Provider value={details}>
    <ContextB />
    </data.Provider>
    </>
  )
}

export default React.memo(ContextA)
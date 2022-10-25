export const incNumber = () =>  {
    return {type: 'INCREMENT'}
}

export const decrNumber = () => {
    return {type: 'DECREMENT'}
}

export const addData = (users) => {
    return {type: 'PUSHDATA', payload: users}
}
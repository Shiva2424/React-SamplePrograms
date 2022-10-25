import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {incNumber, decrNumber,addData} from './actions/index'
import store from './store';
import axios from 'axios';

function Home() {
    const number = useSelector(state => state.changeNumber.number);
    const dispatch = useDispatch();
    const handleIncrement = () => {dispatch(incNumber())}
    const handleDecrement = () => {dispatch(decrNumber())}
    const FetchUsers = () => {
        return function() {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id);
                console.log('users ::', users)
                  dispatch(addData(users))  
            })  
        }
    }
    store.dispatch(FetchUsers())
  return (
    <>
    <div>
    <button onClick={handleIncrement}>Increment</button>
    Value is : {number}
    <button onClick={handleDecrement}>Decrement</button>
    </div>
    </>
  )
}

export default Home
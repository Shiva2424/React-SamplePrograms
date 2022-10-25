import {rootReducer} from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { addData } from './actions'; 
import { useDispatch } from 'react-redux';

const store = createStore(rootReducer, applyMiddleware(thunk));
// const FetchUsers = () => {
//     const dispatch = useDispatch();
//     return function() {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(res => {
//             const users = res.map(user => user.id);
//               dispatch(addData())  
//         })
//         }
            
//     }
// store.dispatch(FetchUsers)
export default store;
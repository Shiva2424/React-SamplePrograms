const initialState = {number:0,data:[]};

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, number: state.number + 1}
    case "DECREMENT":
        console.log(state)
        return {...state, number: state.number - 1}
        case "PUSHDATA":
        console.log(state)
        return {...state, data: action.payload}
    default:
      return state;
  }
};

export default changeNumber;

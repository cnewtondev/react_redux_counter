//setting initial state

const initialState = {
    counter:0
}
//settting up functions of what to do with state
function rootReducer(state = initialState ,action){
    //the actual function one
switch(action.type){
    case 'INCREMENT' :
    return {counter: state.counter+1}
    //actual function two  
    case 'DECREMENT' :
    return {counter: state.counter-1}
    //default action
    default:
        return state
}
}

export default rootReducer
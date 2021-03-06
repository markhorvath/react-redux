import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // this is one way to do it, but better to use spread operator like the others below
                const newState = Object.assign({}, state);
                newState.counter = state.counter + 1;
                return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultID);
            // const test = {...state, results: updatedArray};
            // console.log(test);
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}
    // THIS IS ANOTHER WAY TO DO IT, PROBABLY BETTER SINCE IT REPEATS LESS
    // const updatedState = {
    //     ...state,
    //     results:[...state.results]
    // };

    // switch (action.type){
    //     case 'INCREMENT':
    //         updatedState.counter+=1;
    //         break;
    //     case 'DECREMENT':
    //         updatedState.counter-=1;
    //         break;
    //     case 'ADD':
    //         updatedState.counter+=action.value;
    //         break;
    //     case 'SUBTRACT':
    //         updatedState.counter-=action.value;
    //         break;
    //     case 'STORE_RESULT':
    //         updatedState.results.push({id: new Date(), value: state.counter});
    //         break;
    //     default:
    //         break;
    // }
    //     return updatedState;

export default reducer;
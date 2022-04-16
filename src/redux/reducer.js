import { STORE_CARDS } from "./actiontypes";

const INITIAL_STATE = {
    counter: 0,
    isUserLoggedIn: false,
    users: [],
    loading: false,
    error: false,
    cards: [],
}

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        // case INCREMENT:
        //     return {...state, counter: state.counter+1}
        // case DECREMENT:
        //     return {...state, counter: state.counter-1}
        // case GET_USER_DATA_INITIATED:
        //     return {...state, loading: true}
        // case GET_USER_DATA_SUCCESS:
        //     return {...state, loading: false, users: action.data, error: false}
        // case GET_USER_DATA_FAIL:
        //     return {...state, error: true, users: [], loading: false}
        case STORE_CARDS:
            return {...state, cards: action.payload}
        default:
            return state
    }
}

export default reducer;
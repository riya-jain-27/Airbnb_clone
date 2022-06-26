import { STORE_CARDS, GET_USER_DATA_FAIL, GET_USER_DATA_INITIATED, GET_USER_DATA_SUCCESS, LOGGED_IN, LOGGED_OUT} from "./actiontypes";

const INITIAL_STATE = {
    isUserLoggedIn: false,
    users: [],
    loading: false,
    error: false,
    cards: [],
}

const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_USER_DATA_INITIATED:
            return {...state, loading: true}
        case GET_USER_DATA_SUCCESS:
            return {...state, loading: false, users: action.data, error: false}
        case GET_USER_DATA_FAIL:
            return {...state, error: true, users: [], loading: false}
        case STORE_CARDS:
            return {...state, cards: action.payload}
        case LOGGED_IN:
            return {...state, isUserLoggedIn: true}
        case LOGGED_OUT:
            return {...state, isUserLoggedIn: false}
        default:
            return state
    }
}

export default reducer;
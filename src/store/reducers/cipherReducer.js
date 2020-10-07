import { CHANGE_DECODE_INPUT, CHANGE_ENCODE_INPUT, CHANGE_PASSWORD_INPUT } from "../actionTypes";

const initialState = {
    passwordValue: '',
    decodedValue: '',
    encodedValue: ''
};

const cipherReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_DECODE_INPUT:
            return {...state, decodedValue: action.value}
        case CHANGE_ENCODE_INPUT:
            return {...state, encodedValue: action.value}
        case CHANGE_PASSWORD_INPUT:
            return {...state, passwordValue: action.value}
        default:
            return state
    };
};

export default cipherReducer;
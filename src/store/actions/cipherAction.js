import axios from '../../axiosApi';
import { CHANGE_DECODE_INPUT, CHANGE_ENCODE_INPUT, CHANGE_PASSWORD_INPUT } from '../actionTypes';

export const changePasswordValue = value => {
    return { type: CHANGE_PASSWORD_INPUT, value };
};

export const changeEncodeValue = value => {
    return { type: CHANGE_ENCODE_INPUT, value };
};

export const changeDecodeValue = value => {
    return { type: CHANGE_DECODE_INPUT, value }
};

export const encodeText = (decoded, password) => {
    const data = {
        text: decoded,
        password: password,
    };
    return async dispatch => {
        const response = await axios.post("/cipher/encode/", data);
        dispatch(changeEncodeValue(response.data.text));
    };
};

export const decodeText = (encoded, password) => {
    const data = {
        text: encoded,
        password: password,
    };
    return async dispatch => {
        const response = await axios.post("/cipher/decode/", data);
        dispatch(changeDecodeValue(response.data.text));
    };
};
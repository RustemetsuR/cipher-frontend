import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDecodeValue, changeEncodeValue, changePasswordValue, decodeText, encodeText } from '../../store/actions/cipherAction';
import './MainPage.css';

const MainPage = () => {

    const dispatch = useDispatch();
    const passwordValue = useSelector(state => state.passwordValue);
    const decodedValue = useSelector(state => state.decodedValue);
    const encodedValue = useSelector(state => state.encodedValue);

    const changedDecodeValInput = event => {
        const value = event.target.value;
        dispatch(changeDecodeValue(value));
    };

    const changedEncodeValInput = event => {
        const value = event.target.value;
        dispatch(changeEncodeValue(value));
    };

    const changedPasswordValInput = event => {
        const value = event.target.value;
        dispatch(changePasswordValue(value));
    };

    const clickedDecodeText = () => {
        if (passwordValue !== '') {
            dispatch(decodeText(encodedValue, passwordValue));
        };
    };

    const clickedEncodeText = () => {
        if (passwordValue !== '') {
            dispatch(encodeText(decodedValue, passwordValue))
        };
    };


    return (
        <div>
            <input className='inputs-cipher decoded-inp' placeholder='Decoded' onChange={changedDecodeValInput} value={decodedValue} />
            <div className='buttons-box'>
                <input className='password-inp' placeholder='Password' onChange={changedPasswordValInput} value={passwordValue} />
                <button onClick={clickedDecodeText}>Decode</button>
                <button onClick={clickedEncodeText}>Encode</button>
            </div>
            <input className='inputs-cipher encoded-inp' placeholder='Encoded' onChange={changedEncodeValInput} value={encodedValue} />
        </div>
    );
};

export default MainPage;
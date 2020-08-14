import React from 'react';

const MyInput = props => {
    return (
        <input value={props.val} onChange={(event) => props.onChange(event.target.value)}/>
    );
}

export default MyInput;
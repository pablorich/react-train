import React from 'react';

const CharComponent = props => {
    return (
        <p className="char-component" onClick={() => props.onClick(props.index)}>
            {props.char}
        </p>
    );
}

export default CharComponent;
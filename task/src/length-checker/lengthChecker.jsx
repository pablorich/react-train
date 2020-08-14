import React from 'react';

const LengthChecker = props => {
    const length = props.length ? props.length : 0;
    let goodSize = true;
    if(length<5 || length > 15)
        goodSize = false;
    const message = goodSize? "Correcto":"El texto es muy corto o muy largo";

    return (
        <p>
            {message}
        </p>
    );
}

export default LengthChecker;
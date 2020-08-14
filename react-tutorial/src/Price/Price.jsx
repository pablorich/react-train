import React from 'react';

const Price = props => {
    const reach = 15;
    const elements = [...Array(reach)].map((e,i) => {
        return <h1>{i+1}</h1>
    })
    return (
        <div>
            {elements}
            <h3 style={{color:'black', display:'inline'}}>Price: </h3>
            <h2 style={{color:'orange', display: 'inline'}}>USD $ {props.price}</h2>
        </div>
    );
}

export default Price;
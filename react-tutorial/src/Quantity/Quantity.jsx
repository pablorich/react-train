import React from 'react';
import { Dropdown as _dropdown } from "react-bootstrap";

const Quantity = props => {
    const elements = props.reach.map((number) => {
        <Dropdown.Item>{number}</Dropdown.Item>
    })

    return (
        <_dropdown>
            <Dropdown.Toggle>
                Qty
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
            </Dropdown.Menu>
            <h3 style={{color:'black', display:'inline'}}>Price: </h3>
            <h2 style={{color:'orange', display: 'inline'}}>USD $ {props.price}</h2>
        </_dropdown>
    );
}

export default Quantity;.
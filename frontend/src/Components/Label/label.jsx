import React from 'react';

export default (props) => {
    return (
        <label htmlFor={props.for}>{props.label}</label>
    )
}
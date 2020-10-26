import React from 'react'

export default (props)=> {

    return(
        <input type="text" id={props.id} name={props.name} placeholder={props.value}/>
    )
}
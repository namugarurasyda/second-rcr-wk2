import React from 'react'

const Hello = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello, welcome to React with Javascript!</h1>
            <h1> Hello {props.name}</h1>
        </div>
    )
    // Without JSX
    // return React.createElement(
    //      'div', 
    //      null,  
    //      React.createElement('h1', null, 'Hello RCR week  with arrow function'))
} 

export default Hello
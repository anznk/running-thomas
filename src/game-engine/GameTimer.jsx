import React from 'react'

const GameTimer = (props) => {
     const start = () => {
         console.log('Invoking start');
         alert('Hello!')
     }

     const stop = () => {
         console.log('Invoking stop');
     }

     return (
        <button onClick={start}>Hello</button>
    )
}



export { GameTimer };
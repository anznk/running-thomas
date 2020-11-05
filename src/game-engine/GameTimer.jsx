import React, {useState} from 'react'

const GameTimerContext = React.createContext('time');

const GameTimer = (props) => {

    const [subscribers, setSubscriber] = useState([])
    const [loopId, setLoopId] = useState(null)
    
    const loop = (time) => {
        if(loopId){
           subscribers.forEach(callback => {
               callback(time)
           })
       }
       loopId = requestAnimationFrame(loop)
    }

     const start = () => {
         if(!loopId){
             loop()
         }
     }

     const stop = () => {
         if(loopId){
             cancelAnimationFrame(loopId)
             loopId = null
         }
     }



     return (
        <button onClick={start}>Hello</button>
    )
}
export { GameTimer };
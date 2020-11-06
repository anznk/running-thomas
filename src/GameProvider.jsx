import React, { useRef, useState, useEffect, useReducer} from "react";
//import GameObject from "./components/GameObject.jsx";
import RunnerRoad from "./components/GameStrip.jsx";


const GameObjects = React.createContext();

const GameProvider = (props) => {　
  const [x1, setX1] = useState(100)
  const [x2, setX2] = useState(200)

  
  let gameObjects = {
    objects:[
      {'id':'object 1', coordinates:{'x':x1, 'y':100}},
      {'id':'object 2', coordinates:{'x':x2, 'y':100}}
    ]
  }
  
  useEffect(() => {

    console.log('[GameProvider] Inside useEffect')

    const interval = setInterval(() => {
      setX1(x1 => (x1 + 1))
      setX2(x2 => (x2 + 1))
    }, 1000 / 60);
 
    // Call this function when 'unmount' happens.
    return function(){
      
    }
  }, []);
  
  return (
    <GameObjects.Provider value = {gameObjects}>
        <RunnerRoad></RunnerRoad>
      </GameObjects.Provider>
  )
};
const GameConsumer = GameObjects.Consumer;
export { GameProvider, GameConsumer, GameObjects };
//export default Context

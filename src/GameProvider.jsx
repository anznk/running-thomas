import React, { useState, useEffect, useRef, useContext} from "react";
//import GameObject from "./components/GameObject.jsx";
import RunnerRoad from "./components/GameStrip.jsx";
import Jump from './components/Jump.jsx';


const GameProviderContext = React.createContext();


const GameProvider = (props) => {　
  const [x1, setX1] = useState(100)
  const [x2, setX2] = useState(200)

  const gameProviderCanvasRef = useRef(null);
  let canvasRef = gameProviderCanvasRef;
  
  
  let gameObjects = {
    objects:[
      {'id':'object 1', coordinates:{'x':x1, 'y':100}},
      {'id':'object 2', coordinates:{'x':x2, 'y':100}}
    ]
  }
  
  useEffect(() => {

    console.log('[GameProvider] Inside useEffect')
    setInterval(() => {
      setX1(x1 => (x1 + 1))
      setX2(x2 => (x2 + 1))
    }, 1000 / 60);
 
    // Call this function when 'unmount' happens.
    return function(){
      
    }
  }, []);
  
  return (
    <canvas ref={canvasRef} {...props} id='gamestrip'>
      <GameProviderContext.Provider value = {{gameObjects, canvasRef}}>
        <RunnerRoad></RunnerRoad>
        <Jump></Jump>
      </GameProviderContext.Provider>
    </canvas>
  )
};
const GameConsumer = GameProviderContext.Consumer;
export { GameProvider, GameConsumer, GameProviderContext };
//export default Context

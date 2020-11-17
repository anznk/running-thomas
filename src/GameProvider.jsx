import React, { useState, useEffect, useRef, useContext} from "react";
//import GameObject from "./components/GameObject.jsx";
import RunnerRoad from "./components/GameStrip.jsx";
import Jump from './components/Jump.jsx';


const GameProviderContext = React.createContext();
const gameSpeed = 1000 / 240;

const addObject = (gameObjects) => {
    //gameObjects.add
}

const GameProvider = (props) => {　
  const [x1, setX1] = useState(window.innerWidth)
  const [x2, setX2] = useState(window.innerWidth - 100)

  const gameProviderCanvasRef = useRef(null);
  let canvasRef = gameProviderCanvasRef;
  
  let gameObjects = {
    objects:[
      {'id':'object 1', coordinates:{'x':x1, 'y':120}},
      {'id':'object 2', coordinates:{'x':x2, 'y':120}}
    ]
  }
  
  useEffect(() => {
    console.log('[GameProvider] Inside useEffect')
    setInterval(() => {
      console.log(x1)
      if(x1 < 0){
        console.log('reset x1')
        setX1(x1 => window.innerWidth);
      }else{
        setX1(x1 => (x1 - 3))
      }

      if(x2 < 0){
        console.log('reset x2')
        setX2(x2 => window.innerWidth);
      }else{
        setX2(x2 => (x2 - 3))
      }  
    }, gameSpeed);
 
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

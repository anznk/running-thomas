import React, { useRef, useState, useEffect, useReducer} from "react";
import GameObject from "./components/GameObject.jsx";


const LocationContext = React.createContext();

const GameProvider = (props) => {　
  const [x1, setX1] = useState(20)
  const [x2, setX2] = useState(30)
  
  useEffect(() => {
    console.log('Inside useEffect')
    const interval = setInterval(() => {
      setX1(x1 => (x1 + 1))
      setX2(x2 => (x2 + 1))
    }, 1000 / 20);
 
    // Call this function when 'unmount' happens.
    return function(){
      //alert('unmount on GameProvider')
      //clearInterval(interval)
    }
  }, []);
  
  return (
    <LocationContext.Provider value={{
      cordinates:[200,200]
    }}>
        <GameObject 
        y='10' 
        x={x1}
        start={window.innerWidth}
        />
        <GameObject 
        y='10' 
        x={x2}
        start='0'
        />
      </LocationContext.Provider>
  )
};
const GameConsumer = LocationContext.Consumer;
export { GameProvider, GameConsumer, LocationContext };
//export default Context

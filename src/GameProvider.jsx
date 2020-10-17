import React, { useRef, useState, useEffect, useReducer} from "react";
import GameObject from "./components/GameObject.jsx";
import Canvas from './components/GameObject.jsx'

const LocationContext = React.createContext();

const GameProvider = (props) => {　
  const [x, setX] = useState(200)
  
  return (
    <LocationContext.Provider
      value={
        x
      }
      >
        <GameObject />
      </LocationContext.Provider>
  )
};
const GameConsumer = LocationContext.Consumer;
export { GameProvider, GameConsumer, LocationContext };
//export default Context

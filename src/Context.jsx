import React, { useRef, useState, useEffect, useReducer} from "react";

const Context = React.createContext();

const GameProvider = (props) => {　
  const canvasRef = useRef(null);
  const [x, setX] = useState(100);

  // const initialState = {
  //   loading: true,
  //   error: "",
  //   current: {},
  //   forecast: {}
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setX(x => parseInt(x + 1) % window.innerHeight)
      // setY(y => parseInt(y + 1) % window.innerWidth)
      // console.log(parseInt(x % canvas.width))
      // console.log(parseInt(y % canvas.height))
    },15)

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // let frameCount = 200
    // let animationFrameId
    // canvas.height = 200;
    // canvas.width = window.innerWidth;
    
    // //Our draw came here
    // const render = () => {
    //   frameCount++
    //   draw(context, frameCount, parseInt(x % canvas.width), parseInt(100))
    //   animationFrameId = window.requestAnimationFrame(render)
    // }
    
    // render()
    
    return () => {
      //window.cancelAnimationFrame(animationFrameId)
      clearInterval(interval)
    }
  },[])
  
  return (
    <Context.Provider
      value={{
        x
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
const GameConsumer = Context.Consumer;
export { GameProvider, GameConsumer, Context };

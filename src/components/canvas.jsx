import React, { useContext, useRef, useEffect, useState } from 'react'
import { Context } from "../Context";
// <name of function> <arguments> { }

export const Canvas = props => {
  const appContext = useContext(Context);
  const { x } = appContext;
  console.log("x",x);
  
  const canvasRef = useRef(null);
  // const [x, setX] = useState(props.x);
  // const [y, setY] = useState(props.y);

  const draw = (ctx, frameCount, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    //ctx.arc(frameCount, 600, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.arc(x, 100, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI);
    ctx.fill();
  }
  
  return (
    
      <div>
      <canvas ref={canvasRef} {...props}/>
      </div>
    
  
  )
}

export default Canvas

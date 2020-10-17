import React, { useRef, useEffect, useState } from 'react'

// <name of function> <arguments> { }
const Canvas = props => {
  const canvasRef = useRef(null)
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)

  const draw = (ctx, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    //ctx.arc(frameCount, 600, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.arc(x, y, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI)
    ctx.fill();
  }
  
  // useEffect is executed when 'render' is called on the Canvas element
  useEffect(() => {
    
    const interval = setInterval(() => {
      setX(x => parseInt(x + 1) % window.innerHeight)
    },7)

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let animationFrameId
    canvas.height = 40; //window.innerHeight;
    canvas.width = window.innerWidth;
    
    //Our draw came here
    draw(context, parseInt(x % canvas.width), parseInt(y % canvas.height))
    
    return () => {
      clearInterval(interval)
    }
  }, [draw])
  
  return (
    <canvas ref={canvasRef} {...props}/>
  )
}

export default Canvas

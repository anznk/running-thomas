import React, { useContext, useRef, useEffect, useState } from 'react'
import {LocationContext} from '../GameProvider.jsx'

// <name of function> <arguments> { }
const GameObject = props => {
  const canvasRef = useRef(null)
  const bigX = useContext(LocationContext)

  const [x, setX] = useState(200)
  const [y, setY] = useState(220)

  const draw = (ctx, x, y) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    //ctx.arc(frameCount, 600, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.arc(bigX,y, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI)
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
    canvas.height = window.innerHeight;
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

export default GameObject

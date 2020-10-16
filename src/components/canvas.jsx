import React, { useRef, useEffect, useState } from 'react'

// <name of function> <arguments> { }
const Canvas = props => {
  const canvasRef = useRef(null)
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)
  
  const draw = (ctx, frameCount, x, y) => {
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
      setY(y => parseInt(y + 1) % window.innerWidth)
      console.log(parseInt(x % canvas.width))
      console.log(parseInt(y % canvas.height))
    },7)

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 200
    let animationFrameId
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    //Our draw came here
    const render = () => {
      frameCount--
      
      draw(context, frameCount, parseInt(x % canvas.width), parseInt(y % canvas.height))
      
      animationFrameId = window.requestAnimationFrame(render)
    }
    
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
      clearInterval(interval)
    }
  }, [draw])
  
  return (
  <canvas ref={canvasRef} {...props}/>
  
  )
}

export default Canvas

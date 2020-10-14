import React, { useRef, useEffect } from 'react'
// <name of function> <arguments> { }
const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.arc(frameCount, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill();
  }
  
  // useEffect is executed when 'render' is called on the Canvas element
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas

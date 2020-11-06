// import React, { useContext, useRef, useEffect, useState } from 'react'

// import {CanvasContext} from '../GameProvider.jsx'

// function drawCircle(ctx, x,y){
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.fillStyle = '#D2691E';
//     ctx.beginPath();
//     //ctx.arc(frameCount, 600, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     ctx.arc(x,y, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI)
//     ctx.fill();
// }

// function drawBox(ctx, canvas, x,y){
//   ctx.clearRect(x, y, canvas.clientWidth, canvas.clientHeight);
  
//     ctx.beginPath();
//     ctx.fillStyle = 'black';
//     ctx.fillRect(x, y, window.innerWidth, 30);
// }

// const GameObject = props => {
//   const x = parseInt(props.x)
//   const y = parseInt(props.y)
//   const start = props.start

//   const canvas = useContext(CanvasContext)

//   const draw = (ctx, x, y) => {
//     //drawBox(ctx,canvas, x,y)
//     drawCircle(ctx,x,y)
//     console.log('game object name: ' + props.name + ' x:' + x + ' - y: ' + y)
//   }
  
//   // useEffect is executed when 'render' is called on the Canvas element
//   useEffect(() => {
//     //console.log(canvas.current.getContext('2d'))
//     //const canvas = null; //CanvasContext.gameCanvasRef.current
    
//     const context = canvas.current.getContext('2d')
//     //canvas.height = window.innerHeight;
//     //canvas.width = window.innerWidth;
    
//     //Our draw came here
//     draw(context, x % canvas.current.width,y)
//     //draw(context, canvas, x % canvas.width,props.y % canvas.height)
  
//   }, [draw])
  
//   return null;
// }

// export default GameObject

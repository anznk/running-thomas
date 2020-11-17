import React, { useContext, useRef, useEffect } from 'react'
import {GameProviderContext} from '../GameProvider.jsx'

const drawCircle = (ctx, x,y) =>{
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.arc(x,y, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI);
    ctx.fill();
}

const RunnerRoad = (props) => {
    //let RunnerRoadCanvasRef = useRef(null)

    const gameProviderContext = useContext(GameProviderContext);
    const {gameObjects, canvasRef} = gameProviderContext;

    const draw = (ctx) => {
       for(let i = 0; i < gameObjects.objects.length; i++){
           let x = gameObjects.objects[i].coordinates['x'];
           let y = gameObjects.objects[i].coordinates['y'];
        //    console.log('x: ' + x, 'y: '+ y);
           drawCircle(ctx, x,y);
       }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = 500;
        canvas.width = window.innerWidth;

        draw(context)
    })

    
    return (
        // <canvas ref={RunnerRoadCanvasRef} {...props} id='gamestrip'></canvas>
        null
    )
}

export default RunnerRoad;
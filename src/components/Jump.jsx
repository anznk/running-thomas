import React, {useContext, useRef, useEffect} from 'react';
import Thomas from '../images/Thomas.jpg'
import {GameObjects} from '../GameProvider.jsx'

let flgUp = false;
let flgJump = false;

const Jump = props => {
  let RunnerRoadCanvasRef = useRef(null);
  const gameObjects = useContext(GameObjects);

  const draw = (ctx) => {
    for(let i = 0; i < gameObjects.objects.length; i++){
        let x = gameObjects.objects[i].coordinates['x'];
        let y = gameObjects.objects[i].coordinates['y'];
        
        console.log('x: ' + x, 'y: '+ y);
        drawCircle(ctx, x,y);
    }
  }
    window.addEventListener('keyup', e => { flgUp = true });
    const canvasRef = useRef(null);
    let objectThomas = {
      height:30,
      jumping:false,
      width:90,
      x:50, // center of the canvas
      x_velocity:0,
      y:0,
      y_velocity:0
    }
    const loop = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.canvas.height = 200;
      context.canvas.width = 1200; 
      const img = new Image();
      img.src = Thomas;
      draw(context);
      if (flgUp && !flgJump) {
        objectThomas.y_velocity -= 15;
        flgJump = true;
        flgUp = false;
      }

      objectThomas.y_velocity += 2.0;// gravity
      objectThomas.y += objectThomas.y_velocity;
      objectThomas.y_velocity *= 1.1;// friction

      if (objectThomas.y > 160) {
        flgJump = false;
        objectThomas.y = 160;
        objectThomas.y_velocity = 0;
      }
      context.drawImage(img, objectThomas.x, objectThomas.y, objectThomas.width, objectThomas.height);
      // call update when the browser is ready to draw again
      window.requestAnimationFrame(loop);
    };

  useEffect(() => {
    window.requestAnimationFrame(loop);
  }, [])

  const drawCircle = (ctx, x,y) =>{
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#D2691E';
    ctx.beginPath();
    ctx.arc(x,y, 20*Math.sin(10*0.05)**2, 0, 2*Math.PI);
    ctx.fill();
  }

  return(
    <>
    <canvas
      ref={canvasRef} 
      style={{ width: window.innerWidth, height: window.innerHeight }}
    />
    </>
  )

}

export default Jump;
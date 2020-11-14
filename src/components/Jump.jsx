import React, {useContext, useRef, useEffect} from 'react';
import Thomas from '../images/Thomas.jpg'
import {GameProviderContext} from '../GameProvider.jsx'

let flgUp = false;
let flgJump = false;

const Jump = props => {

  const gameProviderContext = useContext(GameProviderContext);
  const {gameObjects, canvasRef} = gameProviderContext;


    window.addEventListener('keyup', e => { flgUp = true });
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
      const img = new Image();
      img.src = Thomas;
      
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

  return(
    <>
    </>
  )

}

export default Jump;
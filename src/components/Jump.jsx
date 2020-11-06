import React, {useRef, useEffect} from 'react';
import Thomas from '../images/Thomas.jpg'



let flgUp = false;
let flgJump = false;
const Jump = props => {
  window.addEventListener('keyup', e => { flgUp = true });
  const canvasRef = useRef(null);
  let rectangle = {
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
      
      if (flgUp && !flgJump) {
        rectangle.y_velocity -= 15;
        flgJump = true;
        flgUp = false;
      }

      rectangle.y_velocity += 2.0;// gravity
      rectangle.x += rectangle.x_velocity;
      rectangle.y += rectangle.y_velocity;
      rectangle.x_velocity *= 0.9;// friction
      rectangle.y_velocity *= 1.1;// friction

      if (rectangle.y > 160) {
        flgJump = false;
        rectangle.y = 160;
        rectangle.y_velocity = 0;
      }

      context.fillStyle = "white";
      context.fillRect(0, 0, 180, 100);// x, y, width, height
      context.fillStyle = "#ff0000";// hex for red
      context.beginPath();
      context.drawImage(img, rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      context.fill();
      context.beginPath();
      context.stroke();

      // call update when the browser is ready to draw again
      window.requestAnimationFrame(loop);
    };

  useEffect(() => {
    window.requestAnimationFrame(loop);

  }, [])

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
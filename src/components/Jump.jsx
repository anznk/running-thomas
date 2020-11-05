import React, {useRef, useEffect, useState, useCallback} from 'react';

let flgUp = false;
let flgJump = false;
const Jump = props => {
  const canvasRef = useRef(null);

  const [up, setUp] = useState("false");
  const [rectangle, setRectangle] = useState({
    height:32,
    jumping:false,
    width:32,
    x:144, // center of the canvas
    x_velocity:0,
    y:0,
    y_velocity:0
  })
  // const [controller, setController] = useState({
  //   left:false,
  //   right:false,
  //   up:false
  // })
  const handleKeyDown = useCallback((e) => {
    // setUp(true);
    // console.log("setup", up);
    // console.log("up0",up);
    
        const keyCode = e.keyCode;
        if (keyCode === 38) {//up
          flgUp = true;
          // setUp("true");
          // console.log("up1",up);
          // setController({ ...controller, up: false });
            // console.log("aa",controller.up);
            // console.log("bb",aa);
            // console.log(controller.up);
        }
        
    }, []);

    const loop = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      // console.log("up3",up)
      // console.log("windows",window.innerHeight)
      // canvas.height = window.innerHeight;
      // canvas.width = window.innerWidth;
      // context.canvas.height = 180;
      // context.canvas.width = 1000; 
      // if (controller.up && rectangle.jumping == false) {
      //   rectangle.y_velocity -= 20;
      //   rectangle.jumping = true;
      // }
      if (flgUp && !flgJump) {
      // if (up && !flgJump) {
        rectangle.y_velocity -= 20;
        // rectangle.jumping = true;
        flgJump = true;
        flgUp = false;
        // setUp(false);
      }

      rectangle.y_velocity += 1.5;// gravity
      rectangle.x += rectangle.x_velocity;
      rectangle.y += rectangle.y_velocity;
      rectangle.x_velocity *= 0.9;// friction
      rectangle.y_velocity *= 0.9;// friction

      // if rectangle is falling below floor line
      // if (rectangle.y > 180 - 16 - 32) {
        // console.log("rec.y", rectangle.y);
      if (rectangle.y > 130) {
        // console.log("rec.yy", rectangle.y);
        flgJump = false;
        // rectangle.jumping = false;
        rectangle.y = 180 - 16 - 32;
        rectangle.y_velocity = 0;
        

      }
      

      // if rectangle is going off the left of the screen
      // if (rectangle.x < -32) {

      //   rectangle.x = 320;

      // } else if (rectangle.x > 320) {// if rectangle goes past right boundary

      //   rectangle.x = -32;

      // }

      context.fillStyle = "white";
      context.fillRect(0, 0, 320, 180);// x, y, width, height
      context.fillStyle = "#ff0000";// hex for red
      context.beginPath();
      context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      context.fill();
      context.strokeStyle = "#202830";
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(0, 164);
      context.lineTo(320, 164);
      context.stroke();

      // call update when the browser is ready to draw again
      window.requestAnimationFrame(loop);


    };

  useEffect(() => {
    // const canvas = canvasRef.current;
    // const context = canvas.getContext('2d');
    // context.canvas.height = 180;
    // context.canvas.width = 320; 
    window.addEventListener('keyup', e => handleKeyDown(e));
    // window.addEventListener('keyup', e => setUp(true));
    window.requestAnimationFrame(loop);
    return () => {
      
    }
  }, [])

  return(
    <>
     {/* <canvas ref={canvasRef} {...props}/> */}
    <canvas
      ref={canvasRef} 
      style={{ width: '1000px', height: '100px' }}
    />
     {/* <div>aabb{up}</div> */}
    </>

  )

}

export default Jump;
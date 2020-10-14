import React from 'react';
import { Motion, spring } from 'react-motion';
import Canvas from '../visualsObjects/canvas.js'

function MotionDemo() {
  return (
    <Motion defaultStyle={{ x: 600 }} style={{ x: spring(-600, { stiffness: 10, damping: 10 }) }}>
      {interpolatingStyle =>
        <div
          style={{
            fontSize: '40px',
            WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
          }}
        >
          <Canvas />
        </div>
      }
    </Motion>
  );
}

export default MotionDemo;
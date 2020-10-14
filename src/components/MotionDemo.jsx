import React from 'react';
import { Motion, spring } from 'react-motion';
import Canvas from './canvas.jsx'
import '../motionDemo.css'

function MotionDemo() {
  return (
    <Motion defaultStyle={{ x: 600 }} style={{ x: spring(-600, { stiffness: 1, damping: 10 }) }}>
      {interpolatingStyle =>
        <div
          style={{
            fontSize: '40px',
            WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
          }}
        >
          <div className="box" />
        </div>
      }
    </Motion>
  );
}

export default MotionDemo;
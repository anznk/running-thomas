import React from 'react';
import MotionDemo from './components/MotionDemo';
import Canvas from './components/canvas.jsx'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
      </header>
        <Canvas x='200' y='220'/>
        <Canvas x='220' y='220'/>
    </div>
  );
}

export default App;

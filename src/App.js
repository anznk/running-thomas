import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Test from './Test.js'
import Canvas from './visualsObjects/canvas.js'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p>
        <Canvas />
        <Test a="Hello World!"/>
        </p>

      </header>
    </div>
  );
}

export default App;

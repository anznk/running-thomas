import React from 'react';
import {GameProvider} from './GameProvider.jsx'
import {GameTimer} from './game-engine/GameTimer.jsx'

function App() {
  return (
    <div>
      {/* <GameProvider/> */}
        <GameTimer />
    </div>
  );
}
export default App;

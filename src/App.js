import './App.css'
import Simulator from './components/Simulator/Simulator';
import Graphic from './components/Graphic/Graphic';
import React, { useState } from 'react';

const App = () => {
  const [showGraphic, toggleShowGraphic] = useState(false)

  function simulate () {
    toggleShowGraphic(true)
  }

  return (
    <div>
      <div className="main-title">
        <h2>Simulador de Investimentos</h2>
      </div>
      <div className='components'>
        <div className='component'>
          <Simulator onSimulate={simulate}></Simulator>
        </div>
        <div className='component'>
          {showGraphic && <Graphic></Graphic>}
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css'
import Simulator from './components/Simulator/Simulator';
import Graphic from './components/Results/Results';
import React, { useState } from 'react';

const App = () => {
  const [showGraphic, toggleShowGraphic] = useState(false)
  const [searchParams, setSearchParams] = useState(['bruto', 'liquido'])

  function simulate (props) {
    setSearchParams(props)
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
          {showGraphic && <Graphic searchData={searchParams}></Graphic>}
        </div>
      </div>
    </div>
  );
}

export default App;

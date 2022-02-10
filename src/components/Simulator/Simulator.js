import './Simulator.css'
import info from '../../assets/info.svg'

const Simulator = (props) => {
  function simulateInvestments() {
    props.onSimulate()
  }

  return (
    <div className="simulator">
      <h3 className="simulator-title">Simulador</h3>

      <div className="section">
        <div className='income'>
            <div className="income-top">
              <h5>Rendimento</h5>
              <img src={info} alt="mais informaões"></img>
            </div>

            <div className='income-buttons'>
                <button>Bruto</button>
                <button>Líquido</button>
            </div>
        </div>
      </div>

      <div className="section">
        <div className='indexing'>
            <div className="indexing-top">
              <h5>Tipos de indexação</h5>
              <img src={info} alt="mais informaões"></img>
            </div>
        </div>
      </div>

      <div className="actions">
        <button onClick={simulateInvestments}>Limpar campos</button>
        <button onClick={simulateInvestments} id="simulate-action">Simular</button>
      </div>
    </div>
  )
}

export default Simulator

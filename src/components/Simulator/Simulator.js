import './Simulator.css'
import info from '../../assets/info.svg'

const Simulator = (props) => {
  function simulateInvestments() {
    props.onSimulate()
  }

  return (
    <div className="simulator">
      <h3 className="simulator-title">Simulador</h3>

      <div className="income section">
        <div className="income-top">
          <h5>Rendimento</h5>
          <img src={info} alt="mais informaões"></img>
        </div>
      </div>

      <div className="indexing section">
        <div className="indexing-top">
          <h5>Tipos de indexação</h5>
          <img src={info} alt="mais informaões"></img>
        </div>
      </div>

      <div className="actions">
        <button onClick={simulateInvestments}>Limpar campos</button>
        <button onClick={simulateInvestments}>Simular</button>
      </div>
    </div>
  )
}

export default Simulator
